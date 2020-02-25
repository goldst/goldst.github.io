import MC from '../../js/mouseShadow/MouseShadowController.js';

/**
 * Base for the mouse shadow controller for button blocks, which automates
 * the mouse shadow effect
 * @abstract
 * @extends MouseShadowController
 */
export default class ButtonMouseShadowed extends MC {
    /**
     * @param {String} [modifier = ''] Modifier of the button block.
     *   Default '' means mo modifier.
     * @returns {void}
     */
    constructor(
        modifier = '',
        postShadowFunction,
        shadowFunction) {

        super(
            document.body,
            ['button'],
            `.button${modifier}`
        );

        this._postShadowFunction = postShadowFunction;
        this._shadowFunction = shadowFunction;
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
}
