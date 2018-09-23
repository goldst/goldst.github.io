import LA
    from '../../js/math/LinearAlgebra.js';
import TF
    from '../../js/transformation/TransformationFunctions.js';

import CardAbstract from './CardAbstract.js';

export default class CardProjects extends CardAbstract {
    constructor() {
        super('--projects');
    }

    _transformationFunction(absoluteOrigin, mousePosition) {
        const rotAxis = LA.vector(absoluteOrigin, mousePosition),
            rotation = TF.advBellCurve(absoluteOrigin, mousePosition, 0, 1, 2) - 1,
            invRotAxis = [
                rotAxis[1],
                -rotAxis[0]
            ];

        return `perspective(2000px) ` +
           `var(--transformable-element--initial-transform, translateZ(0)) ` +
           `rotate3d(${invRotAxis[0]}, ` +
           `${invRotAxis[1]}, 0, ${rotation}rad) ` +
           `scale(${TF
               .advBellCurve(absoluteOrigin, mousePosition,
                   0.9, 1, 2)}) ` +
           'translateZ(0) ';
    }

    _postTransformFunction(event, element) {
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
        parent.style.setProperty('background', background + ', 0 var(--projects--scroll-top, 0)  repeating-linear-gradient(45deg, var(--c1) 0px, var(--c0) 40px, var(--c1) 80px)');
    }
}
