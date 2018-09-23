/**
 * After applying a transformation is applied, multiple actions can be
 * performed with the data that is optained from TransformableElement.
 * To do that, one can write his own functions or use the functions in
 * this class. Pass them as the parameter postFunction to
 * mousemoveEventTransform() for TransformationController objects.
 */
export default class PostTransformFunctions {
    /**
     * Sets the parent element's background to a combination of
     * linear-gradients that comply with the borders of the transformed
     * element. This can be used for example if the background of the
     * element is partially transparent and should let through a
     * background inside of the element but not outside.
     * @param {event} event - event that caused the transformation
     * @param {TransformableElement} element - element that was
     *   transformed
     * @returns {void}
     * @example
     *   import TC from './TransformationController.js';
     *   typeof TC // is equal to "function"
     * @todo finish example. How to dom elements in Node.js could be done
     * with jsdom. What about MutationObserver? There are some polyfills.
     * on that way it wouldn't only be for the test but also for the whole
     * system. should be done after the transfromation classes and stuff
     * are splitted to own repository.
     */
    static setParentBackground(event, element) {
        const parent = element.domElement.parentElement,
            background = element.surroundingBackground(
                '#2a908c',
                [
                    parent.offsetWidth,
                    parent.offsetHeight
                ],
                'transparent',
                10
            );
        parent.style.setProperty('background', background);
    }
}
