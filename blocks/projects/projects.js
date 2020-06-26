export default () => {
    //mousemoveTransformations();
    startPositionUpdater();
};

/**
 * @todo i don't know what is happening here. Check it and update
 *   documentation. The whole file is a big mess.
 * @returns {void}
 */
function startPositionUpdater() {
    document.querySelector('.projects__inner')
        .addEventListener("scroll", onScroll);

    document.querySelector('.projects')
        .addEventListener("scroll", onScroll);
    
    window
        .addEventListener('devicemotion', onOrientationChange, true);
}

/**
 * @todo i don't know what is happening here. Check it and update
 *   documentation.
 * @param {event} e some event.
 * @returns {void}
 */
function onScroll(e) {
    document.querySelector('.projects').style
        .setProperty('--projects--scroll-top', e.target.scrollTop + 'px');
}

/**
 * todo i don't know what is happening here. Check it and update
 *   documentation.
 * @param {*} e some event.
 */
function onOrientationChange(e) {
    const
        a = 1 * e.accelerationIncludingGravity.x,
        b = 1 * e.accelerationIncludingGravity.y,
        c = 1 * e.accelerationIncludingGravity.z;

    document.querySelector('.projects').style
        .setProperty('--projects--orientation-a', a);
    document.querySelector('.projects').style
        .setProperty('--projects--orientation-b', -b);
    document.querySelector('.projects').style
        .setProperty('--projects--orientation-c', c);
}
