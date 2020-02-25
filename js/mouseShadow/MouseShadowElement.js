import ECE from '../eventControl/EventControlElement.js';

export default class MouseShadowElement extends ECE {
    /**
     * @param {object} domElement - DOM element that is transformed
     */
    constructor(domElement, cssClasses) {
        /**
         * @type {object}
         */
        super(domElement, cssClasses.concat(['mouse-shadow-element']));
    }
}