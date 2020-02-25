import CardAbstract from './CardAbstract.js';

/**
 * automates event based effects for card blocks without modifiers
 * @extends CardAbstract
 */
export default class Card extends CardAbstract {
    /**
     * @returns {void}
     */
    constructor() {
        // in cards without modifiers, nothing happens
        // after the transformation, thus the empty functions
        super('', () => {}, () => {});
    }
}
