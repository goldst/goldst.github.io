import ECE from './EventControlElement.js';

/**
 * Simplifies watching and regulating CSS changes by linking DOM elements,
 * EventControlElements and actions that should be performed after 
 * the changing the CSS. Also watches for DOM mutations that could
 * create or delete DOM nodes or change the way these nodes are
 * changed.
 * @todo delete EventControlElements of elements that where removed
 */
export default class EventController {
    /**
     * @param {object} baseElement - The common ancestor DOM element of
     *   all observed elements. Attention: Depending on how many
     *   children and subchildren this element has, the choice of the
     *   correct baseElement affects the website performance. Don't spam
     *   DOM mutations in the baseElement subtree.
     * @param {string} [queryFilter = '*'] - This method only looks for
     *   elements that match the queryFilter. Again: The more specific,
     *   the better.
     * @param {boolean} [onlyNewElements = true] - forgot what it does.
     * @param {class} [eventControlClass = EventControlElement] - class
     *   that inherits from EventControlElement
     * @todo Find out what exacly onlyNewElements does and add docs. If it
     *   doesn't do anything, delete it.
     * @returns {void}
     */
    constructor(baseElement, queryFilter = '*', onlyNewElements = true,
        eventControlClass = ECE) {
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
        this.eventControlElements = [];
        /**
         * @type {bool}
         */
        this.onlyNewElements = onlyNewElements;
        /**
         * @type {string}
         * @todo add more specific classes in child classes of this classes
         *   for example .transformable-element
         */
        this.classes = ['event-controlled-element'];
        /**
         * @type {class}
         */
        this.ece = eventControlClass;

        this._addExistingElements(baseElement);
        this._observe(baseElement);
    }

    /**
     * creates a EventControlElement and adds it to an array of all
     * EventControlElements for each node that already exists at the time
     * of construction
     * @private
     * @param {object} baseElement - ancestor of all potential
     *   transformation elements
     * @returns {void}
     */
    _addExistingElements(baseElement) {
        const classesConnected = this.classes
            .map(className => '.' + className)
            .join(' ');

        const filtered =
            [...baseElement.querySelectorAll(this.queryFilter)]
                .filter(e =>
                    this.onlyNewElements ?
                        e.matches(`:not(${classesConnected})`) :
                        true
                );

        filtered.forEach(element =>
            this.addEventControlElement(element)
        );
    }

    /**
     * starts the MutationObserver that controls additions, removals and
     * changes
     * @private
     * @param {object} baseElement - ancestor of all potential
     *   event control elements
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
                    this._afterStyleChange(m.target);
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
     * change. This method makes sure that the EventControlElements of
     * the changed elements stay up to date.
     * @private
     * @param {object} element - element with a possibly changed CSS
     *   transformation
     * @returns {void}
     */
    _afterStyleChange(element) {
        const ece = this.getEventControlElement(element);
        if(ece) {
            ece.update();
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
        const classesConnected = this.classes
            .map(className => '.' + className)
            .join(' ');

        elements
            .filter(e => e.matches(this.queryFilter))
            .filter(e =>
                this.onlyNewElements ?
                    e.matches(`:not(${classesConnected})`) :
                    true
            )
            .forEach(element =>
                this.addEventControlElement(element)
            );
    }

    /**
     * finds the EventControlElement that belongs to a certain
     * domElement
     * @param {object} domElement - DOM element which's
     *   EventControlElement is sought
     * @returns {EventControlElement | void} EventControlElement that
     *   belongs to a certain domElement if there is one
     */
    getEventControlElement(domElement) {
        return this.eventControlElements.find(t =>
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
    addEventControlElement(domElement) {
        this.eventControlElements.push(
            new this.ece(domElement, this.classes)
        );
    }

    /**
     * Adds an eventListener for each DOM element that matches the 
     * criteria.
     * @param {string} [eventType=mousemove] type of the event that
     *   should be listened for
     * @param {function} [modificationFunction=args=>\[]] - returns
     *   an array of css changes. args contain absolute transformation
     *   origin and mouse position, both in arrays, and others.
     *   See {TransformationFunctions} for examples and predefined
     *   functions
     * @param {string} [additionalFilter='*'] - css query that has to
     *   apply additionaly to the one passed in the constructor
     * @param {function} [postFunction = (event, element)=>{}] - optional
     *   function that runs after the css change is sucessfully
     *   handeled internally. See {PostTransformFunctions} for examples
     *   and predefined functions.
     * @returns {void}
     */
    listenToChangeCss(
        eventType = 'mousemove',
        modificationFunction = args => [],
        additionalFilter = '*',
        postFunction = (controller, event, element) => {}) {
        this.eventControlElements
            .filter(ece => ece.domElement.matches(additionalFilter))
            .forEach(ece =>
                document.addEventListener(eventType, event => {
                    this._modify(event, ece, modificationFunction);
                    postFunction.call(this, event, ece);
                })
            );
    }

    /**
     * Calls the passed function and transforms the result according to
     * the output of that function
     * @private
     * @param {event} event - mousemove event that co-triggered the call
     *   of the method
     * @param {EventControlElement} ece - EventControlElement the
     *   modificmation applies to
     * @param {function} modificmationFunction - function which's result
     *   is the modification that is going to be applied. See
     *   {PostTransformFunctions} for examples and predefined functions.
     * @returns {void}
     */
    _modify(event, ece, modificationFunction) {
        /**
         * @todo remove transformOrigin and make modification funtions use that directly
         *   from eventControlElement
         */
        const args = {
            event: event,
            eventController: this,
            transformOrigin: ece.absoluteTransformOriginApprox,
            mousePosition: this._mousePosition(event),
            eventControlElement: ece
        };

        const modArgs = modificationFunction(args);

        ece.modify(modArgs, false);
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
