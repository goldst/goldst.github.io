/**
 * helps with setting, fetching and
 * interpretating CSS changes 
 */
export default class EventControlElement {
    /**
     * @param {object} domElement - DOM element that is changed
     * @param {string[]} cssClasses - CSS classes that should be added
     */
    constructor(domElement, cssClasses) {
        /**
         * @type {object}
         */
        this.domElement = domElement;
        this._addCssClasses(cssClasses);
    }

    /**
     * @private
     * @returns {object} computed style of the domElement
     */
    get _style() {
        return window.getComputedStyle(this.domElement);
    }

    /**
     * @private
     * @return {number[]} width and height of the domElement
     */
    get _size() {
        return [
            this.domElement.offsetWidth,
            this.domElement.offsetHeight
        ];
    }

    /**
     * adds the given css classes to the DOM element so that it can be
     * recognized as transformable when looking at the DOM
     * @private
     * @param {string[]} - CSS classes that should be added
     * @returns {void}
     */
    _addCssClasses(classes) {
        classes.forEach(cl =>
            this.domElement.classList.add(cl)
        );
    }

    /**
     * gets the value of a CSS variable in BEM format
     * @private
     * @param {string} block - name of the modified element
     * @param {string} modifier - specific property
     * @returns {string} value from CSS variable
     */
    _getVariable(block, modifier) {
        return this._getPropertyValue(`--${block}--${modifier}`);
    }

    /**
     * gets the value of a CSS property
     * @private
     * @param {string} property - property name
     * @returns {string} value of a CSS property
     */
    _getPropertyValue(property) {
        return this._style.getPropertyValue(property);
    }

    /**
     * sets the value of a CSS variable in BEM format
     * @private
     * @param {string} block - name of the modified element
     * @param {string} modifier - specific property
     * @param {string} value - value that should be set
     * @returns {void}
     */
    _setVariable(block, modifier, value) {
        this._setProperty(`--${block}--${modifier}`, value);
    }

    /**
     * sets the value of a CSS property
     * @private
     * @param {string} property - property name
     * @param {string} value - value for the property
     * @returns {void}
     */
    _setProperty(property, value) {
        this.domElement.style.setProperty(property, value);
    }

    /**
     * sets multiple CSS properties according to the passed object
     * @param {object} modArgs - object containing CSS properties and
     *   values
     * @returns {void}
     */
    modify(modArgs) {
        for(let property in modArgs) {
            this._setProperty(property, modArgs[property]);
        }
    }

    /**
     * is called when there are changes. Does nothing by default,
     * children might override this
     * @returns {void}
     */
    update() { }
}
