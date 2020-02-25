import ButtonAbstract from './ButtonAbstract.js';

/**
 * automates event based effects for card blocks without modifiers
 * @extends CardAbstract
 */
export default class Card extends ButtonAbstract {
    /**
     * @returns {void}
     */
    constructor() {
        // in buttons without modifiers, nothing happens
        // after the shadowing, thus the empty function
        super('', () => {});
    }
}
