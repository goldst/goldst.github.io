import CardAbstract from './CardAbstract.js';

/**
 * automates the 3d effect for card blocks without modifiers
 * @extends CardAbstract
 */
export default class Card extends CardAbstract {
    /**
     * empty post transform function
     * @override
     * @protected
     * @returns {void}
     */
    _postTransformFunction() {
        //in a card without a modfier, nothing happens after the
        //transformation
    }
}
