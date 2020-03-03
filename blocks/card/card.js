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
        // TODO: do i need this? In which case?
        // C.doEvent(e);
    });

    /**
     * flushes all caches that can be flushed
     * @returns {void}
     */
    const onMove = () => {
        CP.flushRectCaches();
        CM.flushRectCaches();
        //C.flushRectCaches();
    };

    window.addEventListener('pushstate', onMove);
    window.addEventListener('popstate', onMove);
    window.addEventListener('replacestate', onMove);
});
