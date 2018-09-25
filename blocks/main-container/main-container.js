export default () =>
    document.querySelector('.main-container__toggle')
        .addEventListener('click', toProjects);

/**
 * changes the view from the main page to the project page and the other
 * way around
 * @param {event} e - event. Not used, but necessary for passing this
 *   function to `.addEventListener`.
 * @returns {void}
 */
function toProjects(e) {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.classList.remove('main-container--initial');
    mainContainer.classList.toggle('main-container--maximized');
}
