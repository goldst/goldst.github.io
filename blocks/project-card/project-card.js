import {
    add as addTag,
    remove as removeTag
} from './../tags/tags.js';

export default () =>
    document.querySelectorAll('.project-card__data .tags__tag').forEach(
        d => d.addEventListener('click', toggleProjectTag)
    );

/*TODO: implement*/
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
