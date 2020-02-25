import CT
    from './CardTransformable.js';
import TF
    from '../../js/transformationNew/TransformationFunctions.js';
import LA
    from '../../js/math/LinearAlgebra.js';

/**
 * Base for the transformation controller for card blocks, which automates
 * the 3d effect
 * @abstract
 * @extends TransformationController
 */
export default class cardAbstract {
    /**
     * @param {String} [modifier = ''] Modifier of the card block.
     *   Default '' means mo modifier.
     * @param {function} postTransformFunction for examples, see
     *   {js/transformation/TransformableElement/
     *   PostTransformFunctions.js}
     * @returns {void}
     */
    constructor(
        modifier = '',
        postTransformFunction,
        transformationFunction = cardAbstract._transformationFunction) {

        this._throwIfAbstractClass();

        this._ct = new CT(
            modifier,
            postTransformFunction,
            transformationFunction
        );
    }

    /**
     * function which returns the correct transformation for a standard
     * card block depending on the absolute position on screen and the
     * mouse position
     * @protected
     * @todo this documentation is totally outdated. data isn't correct
     * @see {TransformationFunctions}
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @returns {string} transformation with adjusted scale and 3d
     *   rotation
     */
    static _transformationFunction(args) {
        const
            rotAxis = LA.vector(args.transformOrigin, args.mousePosition),
            rotation =
                    TF.advBellCurve(
                        args.transformOrigin, args.mousePosition, 0, 1, 2
                    ) - 1,
            invRotAxis = [
                rotAxis[1],
                -rotAxis[0]
            ],
            rect = args.eventControlElement.domElement.getBoundingClientRect(),
            hover = [
                args.event.clientX - rect.left,
                args.event.clientY - rect.top
            ];

        return {
            transform:
                `perspective(2000px) ` +
                `rotate3d(${invRotAxis[0]}, ` +
                `${invRotAxis[1]}, 0, ${rotation}rad) ` +
                `scale(${TF
                    .advBellCurve(args.transformOrigin, args.mousePosition,
                        0.9, 1, 2)}) ` +
                'translateZ(0) ',
            '--card__inner--hover-left': hover[0] + 'px',
            '--card__inner--hover-top': hover[1] + 'px'
        };
    }

    /**
     * more specific version of {TransformationController}'s
     * mousemoveEventTransform that already specifies where to find the
     * passed transformation functions and what elements it applies to
     * @see TransformationController
     * @returns {void}
     */
    mousemoveEvent() {
        this._ct.mousemoveEventTransform();
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
}
