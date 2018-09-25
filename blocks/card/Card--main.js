import CardAbstract from './CardAbstract.js';

/**
 * automates the 3d effect for card blocks with the --main modifier
 * @extends CardAbstract
 */
export default class CardMain extends CardAbstract {
    /**
     * @returns {void}
     */
    constructor() {
        super('--main');
    }

    /**
     * empty post transform function
     * @override
     * @protected
     * @returns {void}
     */
    _postTransformFunction() {
        //in a card with the '--main' modfier, nothing happens after the
        //transformation
    }
}
