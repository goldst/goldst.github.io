import {
    add as addTag,
    remove as removeTag
} from './../tags/tags.js';

/**
 * @todo This file is being refactored to card--projects.js. Transfer
 *   the functions and delete it
 * @returns {void}
 */
export default () =>
    document.querySelectorAll('.project-card__data .tags__tag').forEach(
        d => d.addEventListener('click', toggleProjectTag)
    );

/**
 * @todo Implement properly. THis method isn't really done yet.
 * @param {event} e - event that contains target tag to change its CSS
 *   classes
 * @returns {void}
 */
function toggleProjectTag(e) {
    const element = e.target,
        filterName = element.innerHTML,
        activeFiltersNode = document.querySelector('.projects__filter');

    if(!activeFiltersNode) {
        return;
    }

    if(element.classList.contains('tags__tag--toggled')) {
        removeTag(activeFiltersNode, filterName);
    } else {
        addTag(activeFiltersNode, filterName);
    }
}
