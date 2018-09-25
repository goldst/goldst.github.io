import TE from './TransformableElement.js';

/**
 * Simplifies watching and regulating CSS transformations by linking
 * DOM elements, TransformableElements and actions that should be
 * performed after transforming. Also watches for DOM mutations that could
 * create or delete transforming nodes or change the way these nodes are
 * transformed.
 * @todo delete TransformableElements of elements that where removed
 */
export default class TransformationController {
    /**
     * @param {object} baseElement - The common ancestor DOM element of
     *   all transformed elements. Attention: Depending on how many
     *   children and subchildren this element has, the choice of the
     *   correct baseElement affects the website performance. Don't spam
     *   DOM mutations in the baseElement subtree.
     * @param {string} [queryFilter = '*'] - This method only looks for
     *   elements that match the queryFilter. Again: The more specific,
     *   the better.
     * @param {boolean} [onlyNewElements = true] forgot what it does.
     * @todo Find out what exacly onlyNewElements does and add docs. If it
     *   doesn't do anything, delete it.
     * @returns {void}
     */
    constructor(baseElement, queryFilter = '*', onlyNewElements = true) {
        /**
         * @type {MutationObserver}
         */
        this._observer = new MutationObserver(m => this._mutates(m));
        /**
         * @type {string}
         */
        this.queryFilter = queryFilter;
        /**
         * @type {TransformableElement[]}
         */
        this.transformableElements = [];
        /**
         * @type {bool}
         */
        this.onlyNewElements = onlyNewElements;

        this._addExistingElements(baseElement);
        this._observe(baseElement);
    }

    /**
     * creates a TransformableElement and adds it to an array of all
     * TransformableElements for each node that already exists at the time
     * of construction
     * @private
     * @param {object} baseElement - ancestor of all potential
     *   transformation elements
     * @returns {void}
     */
    _addExistingElements(baseElement) {
        const filtered =
            [...baseElement.querySelectorAll(this.queryFilter)]
                .filter(e =>
                    this.onlyNewElements ?
                        e.matches(':not(.transformable-element)') :
                        true
                );

        filtered.forEach(element =>
            this.addTransformableElement(element)
        );
    }

    /**
     * starts the MutationObserver that controls additions, removals and
     * changes
     * @private
     * @param {object} baseElement - ancestor of all potential
     *   transformation elements
     * @returns {void}
     */
    _observe(baseElement) {
        this._observer.observe(baseElement, {
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class', 'id', 'type'],
            childList: true
        });
    }

    /**
     * This method is called by the MutationObserver when there is a
     * mutation. Considers which further method calls are necessary
     * @private
     * @param {object} ms - recent mutations
     * @returns {void}
     */
    _mutates(ms) {
        ms.forEach(m => {
            if(m.type === 'childList') {
                this.add([...m.addedNodes]);
            } else if(m.type === 'attributes') {
                switch(m.attributeName) {
                case 'style':
                    this._updateInternalCornerPoints(m.target);
                    break;
                case 'class':
                case 'id':
                case 'type':
                    this.add([m.target]);
                }
            }
        });
    }

    /**
     * _mutates() calls this method when there might have been a CSS
     * transformation. This method makes sure that the
     * TransformableElements of the changed elements stay up to date.
     * @private
     * @param {object} element - element with a possibly changed CSS
     *   transformation
     * @returns {void}
     */
    _updateInternalCornerPoints(element) {
        const te = this.getTransformableElement(element);
        if(te) {
            te.updateCornerPoints();
        }
    }

    /**
     * Adds an array of elements to the system. Calling this method from
     * outside this class only makes sense in few cases, because changes
     * to the element are not observed if itn't child of the baseElement.
     * @param {object[]} elements - Array of DOM elements. Only elements
     *   that pass the queryFilter are added.
     * @returns {void}
     */
    add(elements) {
        elements
            .filter(e => e.matches(this.queryFilter))
            .filter(e =>
                this.onlyNewElements ?
                    e.matches(':not(.transformable-element)') :
                    true
            )
            .forEach(element =>
                this.addTransformableElement(element)
            );
    }

    /**
     * finds the TransformableElement that belongs to a certain domElement
     * @param {object} domElement - DOM element which's
     *   TransformableElement is sought
     * @returns {TransformableElement | void} TransformableElement that
     *   belongs to a certain domElement if there is one
     */
    getTransformableElement(domElement) {
        return this.transformableElements.find(t =>
            t.domElement === domElement
        );
    }

    /**
     * Similar to add(), but for a single DOM element and without query
     * filters. Again, calling this method from outside this class only
     * makes sense in few cases, because changes to the element are not
     * observed if itn't child of the baseElement.
     * @param {object} domElement - Element which's TransformableElement
     *   is about to be added to the array
     * @returns {void}
     */
    addTransformableElement(domElement) {
        this.transformableElements.push(new TE(domElement));
    }

    /**
     * Adds an mousemove eventListener for each DOM element that matches
     * the criteria. Defines how the function should be transformed in
     * case of a mousemove and what should happen afterwards
     * @param {function} [transformationFunction=(o, m)=>'none'] - returns
     *   a css transformation string. params: absolute transformation
     *   origin and mouse position, both in arrays. See
     *   {TransformationFunctions} for examples and predefined functions
     * @param {string} [additionalFilter='*'] - css query that has to
     *   apply additionaly to the one passed in the constructor
     * @param {function} [postFunction = (event, element)=>{}] - optional
     *   function that runs after the transformation is sucessfully
     *   handeled internally. See {PostTransformFunctions} for examples
     *   and predefined functions.
     * @returns {void}
     */
    mousemoveEventTransform(
        transformationFunction = (o, m)=>'none',
        additionalFilter='*',
        postFunction = (event, element)=>{} ) {
        this.transformableElements
            .filter(te => te.domElement.matches(additionalFilter))
            .forEach(te =>
                document.addEventListener('mousemove', event => {
                    this._transform(event, te, transformationFunction);
                    postFunction.call(this, event, te);
                })
            );
    }

    /**
     * Calls the passed function and transforms the result according to
     * the output of that function
     * @private
     * @param {event} event - mousemove event that co-triggered the call
     *   of the method
     * @param {TransformableElement} te - TransformableElement the
     *   transformation applies to
     * @param {function} transformationFunction - function which's result
     *   is the transformation that is going to be applied. See
     *   {PostTransformFunctions} for examples and predefined functions.
     * @returns {void}
     */
    _transform(event, te, transformationFunction) {
        const transformValue = transformationFunction.call(
            this,
            te.absoluteTransformOriginApprox,
            this._mousePosition(event)
        );

        te.transform(transformValue, false);
    }

    /**
     * @private
     * @param {event} event - mousemove event
     * @returns {number[]} absolute mouse position coordinates
     */
    _mousePosition(event) {
        return [
            event.clientX,
            event.clientY
        ];
    }
}
