import Card from './Card.js';
import CardMain from './Card--main.js';
import CardProjects from './Card--projects.js';


window.addEventListener('load', () => {
    new CardProjects().mousemoveEventTransform();
    new CardMain().mousemoveEventTransform();
    new Card().mousemoveEventTransform();
});
