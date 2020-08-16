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

    /**
     * flushes all caches that can be flushed
     * @returns {void}
     */
    function onMove() {
        CP.flushRectCaches();
        CM.flushRectCaches();
        //C.flushRectCaches();
    }
    
    let lastEvent = null;
    function doEvent(event = lastEvent) {
        CP.doEvent(event);
        CM.doEvent(event);
        // TODO: do i need this? In which case?
        // C.doEvent(event);
    }

    window.addEventListener('mousemove', (e) => {
        lastEvent = e;
        doEvent();
    });

    /**
     * @todo this creates a dependency to the projects block by using
     *   their classes, resolve somehow?
     */ 
    document.querySelector('.projects__inner').addEventListener('scroll', (e) => {
        doEvent();
    });

    window.addEventListener('pushstate', onMove);
    window.addEventListener('popstate', onMove);
    window.addEventListener('replacestate', onMove);
});
