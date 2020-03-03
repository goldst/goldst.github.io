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
     * only retrieves size from the dom if it's called the first time
     * else returns cached value
     * @private
     * @return {number[]} width and height of the domElement
     */
    get _size() {
        if(this.__size === undefined) {
            this.__size = [
                this.domElement.offsetWidth,
                this.domElement.offsetHeight
            ];
        }

        return this.__size;
    }

    /**
     * clientBoundingRect of the domElement, cached after it has been the
     * same for 5 calls. Cache can be flushed using {flushRectCache}
     */
    get rect() {
        if(this._rectSafe === undefined) {
            this._rectSafe = 5;
        }

        if(this._rect === undefined || this._rectSafe !== 0) {
            const newRect = this.domElement.getBoundingClientRect();

            if(this._rect !== undefined) { 
                this._rectSafe--;
                for(let a in newRect) {
                    if(newRect[a] !== this._rect) {
                        this._rectSafe = 5;
                        break;
                    }
                }
            }

            this._rect = newRect;
            console.log('neql');
        } else {
            console.log('equal');
        }

        return this._rect;
    }

    /**
     * flushes the rect cache from {get rect}
     * @returns {void}
     */
    flushRectCache() {
        this._rect = undefined;
        this._rectSafe = 5;
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
