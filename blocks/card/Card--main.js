import CardAbstract from './CardAbstract.js';

export default class CardMain extends CardAbstract {
    constructor() {
        super('--main');
    }

    _postTransformFunction() {
        //in a card with hte '--main' modfier, nothing happens after the
        //transformation
    }
}
