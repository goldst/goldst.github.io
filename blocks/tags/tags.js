export default () =>
    document.querySelectorAll('.tags__tag').forEach(
        d => d.addEventListener('click', toggleTag)
    );

/**
 * @todo refactor this file to have the same class structure other files
 * have
 * @param {event} e - event that started the toggle process
 * @returns {void}
 */
function toggleTag(e) {
    const
        target = e.target,
        parent = target.parentElement;

    if(parent.classList.contains('tags--hides-on-click') ||
       target.classList.contains('tags__tag--hides-on-click')) {
        target.classList.toggle('tags__tag--hidden');
        target.remove();
    } else {
        target.classList.toggle('tags__tag--toggled');
    }
}

/**
 * adds a tag to a div if it isn't already in there
 * @todo delete line that is commented out if it doesn't have any impact
 * @param {object} tagsElement - dom element that should contain tag
 *   afterwards
 * @param {String} additionName - content of the new tag
 * @returns {void}
 */
export function add(tagsElement, additionName) {
    if([...tagsElement.childNodes].some(
        e => e.childNodes[0].data === additionName)
    ) {
        return;
    }

    var filterNode = document.createElement('li'),
        text = document.createTextNode(additionName);//,
        //emptyText = document.createTextNode(' ');

    filterNode.appendChild(text);
    filterNode.classList.add('tags__tag');
    filterNode.classList.add('tags__tag--toggled');
    filterNode.addEventListener('click', toggleTag);

    tagsElement.appendChild(filterNode);
}

/**
 * removes a tag from a div if it exists
 * @param {object} tagsElement - dom element that contains tag
 * @param {String} removalName - content of the tag that should be
 *   removed
 * @returns {void}
 */
export function remove(tagsElement, removalName) {
    tagsElement.querySelectorAll('li').forEach(li => {
        if(li.childNodes[0].data === removalName) {
            li.remove();
            return;
        }
    });
}
