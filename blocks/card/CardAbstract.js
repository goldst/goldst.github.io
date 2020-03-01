import CT from './CardTransformable.js';
import CM from './CardMouseShadowed.js';
import TF from '../../js/transformation/TransformationFunctions.js';
import LA from '../../js/math/LinearAlgebra.js';

/**
 * Base for the event controllers for card blocks, which automates
 * the effects
 * @abstract
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
        postShadowFunction,
        transformationFunction = cardAbstract._transformationFunction,
        shadowFunction = cardAbstract._shadowFunction
    ) {

        this._throwIfAbstractClass();

        this._ct = new CT(
            modifier,
            postTransformFunction,
            transformationFunction
        );

        this._cm = new CM(
            modifier,
            postShadowFunction,
            shadowFunction
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
            ];

        return {
            transform:
                `perspective(2000px) ` +
                `rotate3d(${invRotAxis[0]}, ` +
                `${invRotAxis[1]}, 0, ${rotation}rad) ` +
                `scale(${TF
                    .advBellCurve(args.transformOrigin, args.mousePosition,
                        0.9, 1, 2)}) ` +
                'translateZ(0) '
        };
    }

    /**
     * function which takes an object args which contains e mousemove
     * event (event) and returns css changes
     * @param {object} args
     * @returns {object} object of css properties and their values
     */
    static _shadowFunction(args) {
        const
            rect = args.eventControlElement.domElement.getBoundingClientRect(),
            hover = [
                args.event.clientX - rect.left,
                args.event.clientY - rect.top
            ];

        return {
            '--card__inner--mouse-shadow-left': hover[0] + 'px',
            '--card__inner--mouse-shadow-top': hover[1] + 'px'
        };
    }

    /**
     * @todo what does this do in simple words
     * @see TransformationController
     * @returns {void}
     */
    mousemoveEvent() {
        this._ct.mousemoveEventTransform();
        this._cm.mousemoveEventShadow();
    }

    doEvent(event) {
        this._ct.doEvent(event);
        this._cm.doEvent(event);
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
