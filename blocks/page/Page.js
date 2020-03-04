import MC from '../../js/mouseShadow/MouseShadowController.js';

/**
 * Base for the mouse shadow controller for button blocks, which automates
 * the mouse shadow effect
 * @abstract
 * @extends MouseShadowController
 */
class Page extends MC {
    /**
     * @param {String} [modifier = ''] Modifier of the button block.
     *   Default '' means mo modifier.
     * @returns {void}
     */
    constructor() {
        super(document.getElementsByTagName('html')[0], ['page'], '.page');
    }

    /**
     * more specific version of {MouseShadowController}'s
     * mousemoveEventShadow that already specifies where to find the
     * passed shadow functions and what elements it applies to
     * @see MouseShadowController
     * @returns {void}
     */
    mousemoveEventShadow() {
        super.mousemoveEventShadow(
            this._shadowFunction,
            '*',
            this._postShadowFunction
        );
    }

    /**
     * function which takes an object args which contains e mousemove
     * event (event) and returns css changes
     * @param {object} args - contains at least an eventControlElement and
     *   the event
     * @returns {object} object of css properties and their values
     */
    _shadowFunction(args) {
        const
            rect = args.eventControlElement.rect,
            hover = [
                args.event.clientX - rect.left,
                args.event.clientY - rect.top
            ];

        return {
            '--page--mouse-shadow-left': hover[0],
            '--page--mouse-shadow-top': hover[1],
            '--page--center': Math.max(
                Math.abs(args.event.clientX - 0.5 * rect.width),
                Math.abs(args.event.clientY - 0.5 * rect.height)),
            '--page--center-v': Math.abs(
                args.event.clientY - 0.5 * rect.height
            )
        };
    }

    /**
     * nothing happens after calculating the mouse shadow
     * @returns {void}
     */
    _postShadowFunction() {

    }
}

new Page().mousemoveEventShadow();
