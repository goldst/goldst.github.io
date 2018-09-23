/**
 * adds a positioned circle to the document
 * @todo: this is a draft i copied from another file.
 *   Eventually may result in a seperate library for debugging css stuff
 * @param {number} x absolute x position of the dot in px
 * @param {number} y absolute y position of the dot in px
 * @param {number} [w=4] width including border width of the dot in px
 * @param {number} [h=4] height including border height of the dot in px
 * @param {string} [inner='red'] CSS color string of the inner dot area
 * @param {string} [border='yellow'] CSS color string of the dot border
 * @param {string} [id] HTML id for the element. Necessary for removing.
 * @returns {void}
 */
function addDebugDot(x, y, w=4, h=4, inner='red', border='yellow', id) {
    let debugNode = document.createElement('div');

    const style = {
        width: (w-2) + 'px',
        height: (h-2) + 'px',
        position: 'absolute',
        left: (x-w) + 'px',
        top: (y-h) + 'px',
        backgroundColor: inner,
        borderRadius: '50px',
        border: '2px solid ' + border,
        opacity: '1'
    };

    Object.assign(debugNode.style, style);

    if(id) {
        debugNode.id = id;
    }

    document.body.appendChild(debugNode);
}

/**
 * removes a debug dot if it exists
 * @param {string} id HTML id for the elements that should be removed
 * @returns {void}
 */
function removeDebugDot(id) {
    let n = document.getElementById(id);
    if(n) {
        n.remove();
    }
}
