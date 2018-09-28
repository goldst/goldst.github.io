/**
 * @todo This file is being refactored to card--main.js. Transfer
 *   the functions and delete it
 * @returns {void}
 */
export default () => {
    setMouseoverBackgroundVars();
};

/**
 * @returns {void}
 */
function setMouseoverBackgroundVars() {
    document.querySelector('.main-card__inner')
        .addEventListener("mouseover", mainInnerMouseOver);
    document.querySelector('.main-card__inner')
        .addEventListener("mousemove", mainInnerMouseOver);
}

/**
 * @param {event} e - mouseover event to find out mouse position
 * @returns {void}
 */
function mainInnerMouseOver(e) {
    let inner = document.querySelector('.main-card__inner'),
        rect = inner.getBoundingClientRect();


    inner.style.setProperty(
        '--card__inner--hover-left',
        (e.clientX-rect.left) + 'px'
    );

    inner.style.setProperty(
        '--card__inner--hover-top',
        (e.clientY-rect.top) + 'px'
    );
}
