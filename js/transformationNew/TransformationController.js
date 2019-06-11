import EC from '../eventControl/EventController.js';
import TE from './TransformableElement.js';

/**
 * Simplifies watching and regulating CSS transformations by linking
 * DOM elements, TransformableElements and actions that should be
 * performed after transforming. Also watches for DOM mutations that could
 * create or delete transforming nodes or change the way these nodes are
 * transformed.
 * @todo delete TransformableElements of elements that where removed
 */
export default class TransformationController extends EC {
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
        super(baseElement, queryFilter, onlyNewElements, TE);
        this.classes.push('transfromable-element');
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
        this.listenToChangeCss(
            'mousemove', transformationFunction,
            additionalFilter, postFunction
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
