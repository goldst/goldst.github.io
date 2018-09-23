import CardAbstract from './CardAbstract.js';

export default class Card extends CardAbstract {
    _postTransformFunction() {
        //in a card without a modfier, nothing happens after the
        //transformation
    }
}
