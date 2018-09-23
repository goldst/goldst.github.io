export default () =>
    document.querySelectorAll('.tags__tag').forEach(
        d => d.addEventListener('click', toggleTag)
    );

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

export function add(tagsElement, additionName) {
    if([...tagsElement.childNodes].some(e => e.childNodes[0].data === additionName)) {
        return;
    }

    var filterNode = document.createElement('li'),
        text = document.createTextNode(additionName),
        emptyText = document.createTextNode(' ');

    filterNode.appendChild(text);
    filterNode.classList.add('tags__tag');
    filterNode.classList.add('tags__tag--toggled');
    filterNode.addEventListener('click', toggleTag);

    tagsElement.appendChild(filterNode);
}

export function remove(tagsElement, removalName) {
    tagsElement.querySelectorAll('li').forEach(li => {
        if(li.childNodes[0].data === removalName) {
            li.remove();
            return;
        }
    });
}
