import EC from '../eventControl/EventController.js';
import ME from './MouseShadowElement.js';

/**
 * Simplifies watching and regulating CSS shadow effects that are supposed
 * to replace the mouse pointer by by linking DOM elements
 * MouseShadowElements and actions that should be performed after
 * transforming. Also watches for DOM mutations that could create or
 * delete transforming nodes or change the way these nodes are
 * transformed. This class is really similar to {TrabsformationController}
 * @todo delete MouseShadowElements of elements that where removed
 */
export default class MouseShadowController extends EC {
    /**
     * @param {object} baseElement - The common ancestor DOM element of
     *   all shadowed elements. Attention: Depending on how many
     *   children and subchildren this element has, the choice of the
     *   correct baseElement affects the website performance. Don't spam
     *   DOM mutations in the baseElement subtree.
     * @param {string} [queryFilter = '*'] - This method only looks for
     *   elements that match the queryFilter. Again: The more specific,
     *   the better.
     * @param {boolean} [onlyNewElements = true] forgot what it does.
     * @todo Find out what exactly onlyNewElements does and add docs. If it
     *   doesn't do anything, delete it.
     * @returns {void}
     */
    constructor(baseElement, queryFilter = '*', onlyNewElements = true) {
        super(baseElement, queryFilter, ['mouse-shadow-element'], onlyNewElements, ME);
    }

    /**
     * Adds an mousemove eventListener for each DOM element that matches
     * the criteria. Defines how the element should be shadowed in case
     * of a mousemove and what should happen afterwards
     * @param {function} [shadowFunction=(o, m)=>'none'] - returns
     *   a css transformation string. params: array of mouse position
     *   (x, y).
     * @param {string} [additionalFilter='*'] - css query that has to
     *   apply additionally to the one passed in the constructor
     * @param {function} [postFunction = (event, element)=>{}] - optional
     *   function that runs after the mouse shadow is successfully
     *   added internally.
     * @returns {void}
     */
    mousemoveEventShadow(
        shadowFunction = (o, m)=>'none',
        additionalFilter='*',
        postFunction = (event, element)=>{} ) {
        this.listenToChangeCss(
            'mousemove', shadowFunction,
            additionalFilter, postFunction
        );
    }
}
