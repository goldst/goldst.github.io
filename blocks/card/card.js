import Card from './Card.js';
import CardMain from './Card--main.js';
import CardProjects from './Card--projects.js';


window.addEventListener('load', () => {
    new CardProjects().mousemoveEvent();
    new CardMain().mousemoveEvent();
    new Card().mousemoveEvent();
});
