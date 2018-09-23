import TC
    from '../../js/transformation/TransformationController.js';
import TF
    from '../../js/transformation/TransformationFunctions.js';
import LA
    from '../../js/math/LinearAlgebra.js';

export default /*abstract*/ class cardAbstract extends TC {
    constructor(modifier = '') {
        super(
            document.body,
            `.card${modifier} > .card__inner`
        );

        console.log(this);
    }

    _transformationFunction(absoluteOrigin, mousePosition) {
        const rotAxis = LA.vector(absoluteOrigin, mousePosition),
            rotation = TF.advBellCurve(absoluteOrigin, mousePosition, 0, 1, 2) - 1,
            invRotAxis = [
                rotAxis[1],
                -rotAxis[0]
            ];

        return `perspective(2000px) ` +
               `rotate3d(${invRotAxis[0]}, ` +
               `${invRotAxis[1]}, 0, ${rotation}rad) ` +
               `scale(${TF
                   .advBellCurve(absoluteOrigin, mousePosition,
                       0.9, 1, 2)}) ` +
               'translateZ(0) ';
    }

    /*abstract*/ _postTransformFunction(event, element) {
        //look for implementation examples in
        //  'js/transformation/TransformableElement/PostTransformFunctions.js'
        this._throwIfAbstractFunction();
    }

    mousemoveEventTransform() {
        super.mousemoveEventTransform(
            this._transformationFunction,
            '*',
            this._postTransformFunction
        );
    }

    _throwIfAbstractClass() {
        if((typeof new.target).endsWith('Abstract')) {
            throw new Error('cannot call functions in abstract class');
        }
    }

    _throwIfAbstractFunction() {
        this._throwIfAbstractClass();

        throw new Error(
            'cannot call function in child class of abstract class that ' +
            'does not override the abstract function'
        );
    }
}
