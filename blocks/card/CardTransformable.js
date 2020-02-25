import TC
    from '../../js/transformationNew/TransformationController.js';

/**
 * Base for the transformation controller for card blocks, which automates
 * the 3d effect
 * @abstract
 * @extends TransformationController
 */
export default class cardTransformable extends TC {
    /**
     * @param {String} [modifier = ''] Modifier of the card block.
     *   Default '' means mo modifier.
     * @returns {void}
     */
    constructor(
        modifier = '',
        postTransformFunction, 
        transformationFunction) {

        super(
            document.body,
            `.card${modifier} > .card__inner`
        );

        this._postTransformFunction = postTransformFunction;
        this._transformationFunction = transformationFunction;

        console.log(this);
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
