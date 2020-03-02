import Card from './Card.js';
import CardMain from './Card--main.js';
import CardProjects from './Card--projects.js';


window.addEventListener('load', () => {
    const
        CP = new CardProjects(),
        CM = new CardMain(),
        C = new Card();

    CP.mousemoveEvent();
    CM.mousemoveEvent();
    C.mousemoveEvent();

    window.addEventListener('mousemove', (e) => {
        CP.doEvent(e);
        CM.doEvent(e);
        C.doEvent(e);
    });
});
