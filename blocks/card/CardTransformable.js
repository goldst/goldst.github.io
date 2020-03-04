import TC from '../../js/transformation/TransformationController.js';

/**
 * Base for the transformation controller for card blocks, which automates
 * the 3d effect
 * @abstract
 * @extends TransformationController
 */
export default class CardTransformable extends TC {
    /**
     * @param {String} [modifier = ''] Modifier of the card block.
     *   Default '' means mo modifier.
     * @param {function} postTransformFunction - function that performs
     *   actions after the result of transformationFunction is applied
     * @param {function} transformationFunction - function that will
     *   calculate the transformation of the dom elements
     * @returns {void}
     */
    constructor(
        modifier = '',
        postTransformFunction,
        transformationFunction) {

        super(
            document.body,
            ['card'],
            `.card${modifier} > .card__inner`
        );

        this._postTransformFunction = postTransformFunction;
        this._transformationFunction = transformationFunction;
    }

    /**
     * more specific version of {TransformationController}'s
     * mousemoveEventTransform that already specifies where to find the
     * passed transformation functions and what elements it applies to
     * @see TransformationController
     * @returns {void}
     */
    mousemoveEventTransform() {
        super.mousemoveEventTransform(
            this._transformationFunction,
            '*',
            this._postTransformFunction
        );
    }
}
