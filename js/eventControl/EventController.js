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
     * @param {array<string>} [classes = []] - the css class names that
     *   are necessary to qualify the object to be handled by this
     *   EventController
     * @param {boolean} [onlyNewElements = true] - if true, objects that
     *   are already handled by another EventController won't be added to
     *   this object's list.
     * @param {class} [eventControlClass = EventControlElement] - class
     *   that inherits from EventControlElement
     * @returns {void}
     */
    constructor(baseElement, queryFilter = '*', classes = [],
        onlyNewElements = true, eventControlClass = ECE) {

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
         */
        this.classes = ['event-controlled-element', ...classes];
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
        const filtered =
            [...baseElement.querySelectorAll(this.queryFilter)]
                .filter(e =>
                    !this.onlyNewElements ||
                    this.classes.some(c => e.matches(`:not(.${c})`))
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
     * flushes the cache for each eventControlElement
     * @see {EventControlElement.flushRectCache}
     * @returns {void}
     */
    flushRectCaches() {
        this.eventControlElements
            .forEach(ece => ece.flushRectCache());
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
     * to the element are not observed if isn't child of the baseElement.
     * @param {object[]} elements - Array of DOM elements. Only elements
     *   that pass the queryFilter are added.
     * @returns {void}
     */
    add(elements) {
        elements
            .filter(e => e.matches(this.queryFilter))
            .filter(e =>
                !this.onlyNewElements ||
                this.classes.some(c => e.matches(`:not(.${c})`))
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
     * @param {string} eventType type of the event that
     *   should be listened for. If null, you have to react to events
     *   manually, running doEvent(event).
     * @param {function} [modificationFunction=args=>\[]] - returns
     *   an array of css changes. args contain absolute transformation
     *   origin and mouse position, both in arrays, and others.
     *   See {TransformationFunctions} for examples and predefined
     *   functions
     * @param {string} [additionalFilter='*'] - css query that has to
     *   apply additionally to the one passed in the constructor
     * @param {function} [postFunction = (event, element)=>{}] - optional
     *   function that runs after the css change is successfully
     *   handled internally. See {PostTransformFunctions} for examples
     *   and predefined functions.
     * @returns {void}
     */
    listenToChangeCss(
        eventType,
        modificationFunction = args => [],
        additionalFilter = '*',
        postFunction = (controller, event, element) => {}
    ) {

        this.eventControlElements
            .filter(ece => ece.domElement.matches(additionalFilter))
            .forEach(ece => {
                /**
                 * Function that will be run on events, when calling
                 * doEvent or on events of eventType
                 * @param {event} event - event that co-triggered the call
                 *   of the method
                 * @returns {void}
                 */
                const run = (event) => {
                    this._modify(event, ece, modificationFunction);
                    postFunction.call(this, event, ece);
                };

                if(eventType !== null) {
                    ece.domElement.addEventListener(eventType, run);
                }

                ece.doEvent = run;
            });
    }

    /**
     * runs modification functions and postfunctions for all
     * EventControlElements, if they have previously been passed via
     * listenToChangeCss
     * @param {event} event - event that co-triggered the call
     *   of the method
     * @returns {void}
     */
    doEvent(event) {
        this.eventControlElements
            .forEach(ece => {
                // only if doEvent was set by listenToChangeCss
                if(ece.doEvent !== undefined) {
                    ece.doEvent(event);
                }
            });
    }

    /**
     * Calls the passed function and transforms the result according to
     * the output of that function
     * @private
     * @param {event} event - mousemove event that co-triggered the call
     *   of the method
     * @param {EventControlElement} ece - EventControlElement the
     *   modification applies to
     * @param {function} modificationFunction - function, result is the
     *   modification that is going to be applied. See
     *   {PostTransformFunctions} for examples and predefined functions.
     * @returns {void}
     */
    _modify(event, ece, modificationFunction) {
        /**
         * @todo remove transformOrigin and make modification functions +
         *   use that directly from eventControlElement
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
