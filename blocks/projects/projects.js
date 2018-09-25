/*import TransformationController
    from '../../js/transformation/TransformationController.js';
import TF
    from '../../js/transformation/TransformationFunctions.js';
import LA from '../../js/math/LinearAlgebra.js';*/

export default () => {
    //mousemoveTransformations();
    startScrollPositionUpdater();
};

/**
 * @todo i don't know what is happening here. Check it and update
 *   documentation. The whole file is a big mess.
 * @returns {void}
 */
function startScrollPositionUpdater() {
    document.querySelector('.projects__inner')
        .addEventListener("scroll", onScroll);
}

/**
 * @todo i don't know what is happening here. Check it and update
 *   documentation.
 * @param {event} e
 * @returns {void}
 */
function onScroll(e) {
    document.querySelector('.projects').style
        .setProperty('--projects--scroll-top', e.target.scrollTop + 'px');
}
/*
function mousemoveTransformations() {
    const tc = new TransformationController(
        document.querySelector('.projects__inner')
    );

    tc.mousemoveEventTransform(
        combined3dRot,
        '.project-card__inner',
        setParentBackground
    );
}

function combined3dRot(absoluteOrigin, mousePosition) {
    const rotAxis = LA.vector(absoluteOrigin, mousePosition),
        rotation = TF.advBellCurve(
                absoluteOrigin, mousePosition, 0, 1, 2
            ) - 1,
        
        invRotAxis = [
            rotAxis[1],
            -rotAxis[0]
        ];

    return `perspective(2000px) ` +
           `translateX(calc(0.5 * var(--h) - 0.5 * var(--w))) ` +
           `translateY(calc(0.5 * var(--w) - 0.5 * var(--h))) ` +
           `rotate(90deg) ` +
           `rotate3d(${invRotAxis[0]}, ` +
           `${invRotAxis[1]}, 0, ${rotation}rad) ` +
           `scale(${TF
               .advBellCurve(absoluteOrigin, mousePosition,
                   0.9, 1, 2)}) ` +
           'translateZ(0) ';
}

function setParentBackground(event, element) {
    const parent = element.domElement.parentElement,
        background = element.surroundingBackground(
            'var(--c0)',
            [
                parent.offsetWidth,
                parent.offsetHeight
            ],
            'transparent',
            5
        );
    parent.style.setProperty(
        'background',
        background +
        ', 0 var(--projects--scroll-top, 0) ' +
        'repeating-linear-gradient(45deg, var(--c1) 0px, ' +
        'var(--c0) 40px, var(--c1) 80px)');
}
*/
