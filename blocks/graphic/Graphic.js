import MC from '../../js/mouseShadow/MouseShadowController.js';

/**
 * Base for the mouse shadow controller for button blocks, which automates
 * the mouse shadow effect
 * @abstract
 * @extends MouseShadowController
 */
class Graphic extends MC {
    /**y
     * @returns {void}
     */
    constructor() {
        super(document.body, ['graphic'], '.graphic');
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
     * @param {object} args
     * @returns {object} object of css properties and their values
     */
    _shadowFunction(args) {
        const
            rect = args.eventControlElement.domElement.getBoundingClientRect(),
            hover = [
                args.event.clientX - rect.left,
                args.event.clientY - rect.top
            ];

        return {
            '--graphic--mouse-shadow-left': hover[0] + 'px',
            '--graphic--mouse-shadow-top': hover[1] + 'px'
        };
    }

    /**
     * nothing happens after calculating the mouse shadow
     * @returns {void}
     */
    _postShadowFunction() {

    }
}

new Graphic().mousemoveEventShadow();
