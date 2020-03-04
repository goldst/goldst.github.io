import ECE from '../eventControl/EventControlElement.js';

/**
 * helps with setting, fetching and
 * interpreting CSS shadows at the position of the mouse cursor
 */
export default class MouseShadowElement extends ECE {
    /**
     * @param {object} domElement - DOM element that is transformed
     * @param {object} cssClasses - CSS classes that will be added to the
     *   dom element
     */
    constructor(domElement, cssClasses) {
        /**
         * @type {object}
         */
        super(domElement, cssClasses.concat(['mouse-shadow-element']));
    }
}
