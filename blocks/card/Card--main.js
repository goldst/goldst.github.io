import CardAbstract from './CardAbstract.js';

/**
 * automates event based effects for card blocks with the --main
 * modifier
 * @extends CardAbstract
 */
export default class CardMain extends CardAbstract {
    /**
     * @returns {void}
     */
    constructor() {
        // in main cards, nothing happens
        // after the transformation, thus the empty function
        super('--main', () => {});
    }
}
