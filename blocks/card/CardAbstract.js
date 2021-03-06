import CT from './CardTransformable.js';
import CM from './CardMouseShadowed.js';
import TF from '../../js/transformation/TransformationFunctions.js';
import LA from '../../js/math/LinearAlgebra.js';

/**
 * Base for the event controllers for card blocks, which automates
 * the effects
 * @abstract
 */
export default class CardAbstract {
    /**
     * @param {String} [modifier = ''] Modifier of the card block.
     *   Default '' means mo modifier.
     * @param {function} postTransformFunction - function that performs
     *   actions after the result of transformationFunction is applied.
     *   for examples, see {js/transformation/TransformableElement/
     *   PostTransformFunctions.js}
     * @param {function} postShadowFunction - function that performs
     *   actions after the result of shadowFunction is applied
     * @param {function} [transformationFunction =
     *   CardAbstract._transformationFunction] - function that will
     *   calculate the transformation of the dom elements
     * @param {function} [shadowFunction =
     *   CardAbstract._shadowFunction] - function that will calculate the
     *   shadow of the dom elements
     *
     * @returns {void}
     */
    constructor(
        modifier = '',
        postTransformFunction,
        postShadowFunction,
        transformationFunction = CardAbstract._transformationFunction,
        shadowFunction = CardAbstract._shadowFunction
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
     * flushes all rect caches
     * @returns {void}
     */
    flushRectCaches() {
        this._ct.flushRectCaches();
        this._cm.flushRectCaches();
    }

    /**
     * function which returns the correct transformation for a standard
     * card block depending on the absolute position on screen and the
     * mouse position
     * @protected
     * @todo this documentation is totally outdated. data isn't correct
     * @see {TransformationFunctions}
     * @param {object} args - contains at least:
     *   {number[]} absoluteOrigin - absolute transformation origin
     *   {number[]} mousePosition - absolute mouse position
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
     * @param {object} args - contains at least:
     *   {event} event
     *   {object} eventControlElement
     * @returns {object} object of css properties and their values
     */
    static _shadowFunction(args) {
        const
            rect = args.eventControlElement.rect,
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

    /**
     * runs doEvent on both CardTransformable and CardMouseShadowed
     * @todo that's a bad description. change
     * @param {event} event - event, most likely mousemove event
     * @returns {void}
     */
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
