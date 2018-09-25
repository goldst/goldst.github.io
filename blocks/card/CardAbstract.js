import TC
    from '../../js/transformation/TransformationController.js';
import TF
    from '../../js/transformation/TransformationFunctions.js';
import LA
    from '../../js/math/LinearAlgebra.js';

/**
 * Base for the transformation controller for card blocks, which automates
 * the 3d effect
 * @abstract
 * @extends TransformationController
 */
export default class cardAbstract extends TC {
    /**
     * @param {String} [modifier = ''] Modifier of the card block.
     *   Default '' means mo modifier.
     * @returns {void}
     */
    constructor(modifier = '') {
        super(
            document.body,
            `.card${modifier} > .card__inner`
        );

        console.log(this);
    }

    /**
     * function which returns the correct transformation for a standard
     * card block depending on the absolute position on screen and the
     * mouse position
     * @protected
     * @see {TransformationFunctions}
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @returns {string} transformation with adjusted scale and 3d
     *   rotation
     */
    _transformationFunction(absoluteOrigin, mousePosition) {
        const rotAxis = LA.vector(absoluteOrigin, mousePosition),
            rotation =
                TF.advBellCurve(
                    absoluteOrigin, mousePosition, 0, 1, 2
                ) - 1,
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

    /**
     * in any implementation, override this function with a function that
     * does what should happen after transforming the element (eg.
     * setting the correct background to the parent element)
     * @see {PostTransformFunctions}
     * @abstract
     * @protected
     * @param {event} event - event that caused the transformation
     * @param {TransformableElement} element - element that was
     *   transformed
     * @returns {void}
     */
    _postTransformFunction(event, element) {
        //look for implementation examples in
        //  'js/transformation/TransformableElement/
        //  PostTransformFunctions.js'
        this._throwIfAbstractFunction();
    }

    /**
     * more specific version of {TransformationController}'s
     * mousemoveEventTransform that already specifies where to find the
     * passed transformation functions and what elements it applies to
     * @see TransformationController
     * @returns {void}
     */
    mousemoveEventTransform() {
        super.mousemoveEventTransform(
            this._transformationFunction,
            '*',
            this._postTransformFunction
        );
    }

    /**
     * helper function that throws if class name ends with 'Abstract'
     * @private
     * @throws {Error} 'cannot call functions in abstract class'
     * @returns {void}
     */
    _throwIfAbstractClass() {
        if((typeof new.target).endsWith('Abstract')) {
            throw new Error('cannot call functions in abstract class');
        }
    }

    /**
     * Helper function that always throws an error. Override the method
     * which calls this to avoid that.
     * @private
     * @throws {Error} 'cannot call functions in abstract class' if class
     *   name ends on 'Abstract'
     * @throws {Error} 'cannot call function in child class of abstract
     *   class that does not override the abstract function' in any other
     *   case
     * @returns {void}
     */
    _throwIfAbstractFunction() {
        this._throwIfAbstractClass();

        throw new Error(
            'cannot call function in child class of abstract class that ' +
            'does not override the abstract function'
        );
    }
}
