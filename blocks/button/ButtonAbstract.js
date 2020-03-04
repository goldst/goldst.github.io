import BM from './ButtonMouseShadowed.js';

/**
 * Base for the event controllers for button blocks, which automate
 * mouse pointer shadows
 */
export default class ButtonAbstract {
/**
     * @param {String} [modifier = ''] Modifier of the card block.
     *   Default '' means mo modifier.
     * @param {function} postShadowFunction - function that performs
     *   actions after the result of shadowFunction is applied
     * @param {function} [shadowFunction =
     *   ButtonAbstract._shadowFunction] - function that will calculate
     *   the shadow of the dom elements
     * @returns {void}
     */
    constructor(
        modifier = '',
        postShadowFunction,
        shadowFunction = ButtonAbstract._shadowFunction
    ) {

        this._throwIfAbstractClass();

        this._bm = new BM(
            modifier,
            postShadowFunction,
            shadowFunction
        );
    }

    /**
     * function which takes an object args which contains e mousemove
     * event (event) and returns css changes
     * @param {object} args - contains at least eventControlElement and
     *   event
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
            '--button--mouse-shadow-left': hover[0],
            '--button--mouse-shadow-top': hover[1],
            '--button--width': rect.width
        };
    }

    /**
     * @todo what does this do in simple words
     * @see TransformationController
     * @returns {void}
     */
    mousemoveEvent() {
        this._bm.mousemoveEventShadow();
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
