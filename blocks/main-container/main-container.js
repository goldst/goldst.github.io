export default () =>
    document.querySelector('.main-container__toggle')
        .addEventListener('click', toProjects);

function toProjects(e) {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.classList.remove('main-container--initial');
    mainContainer.classList.toggle('main-container--maximized');
}
