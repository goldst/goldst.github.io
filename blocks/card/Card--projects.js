import LA
    from '../../js/math/LinearAlgebra.js';
import TF
    from '../../js/transformation/TransformationFunctions.js';

import CardAbstract from './CardAbstract.js';

/**
 * automates the 3d effect for card blocks with the --projects modifier
 * @extends CardAbstract
 */
export default class CardProjects extends CardAbstract {
    /**
     * @returns {void}
     */
    constructor() {
        super('--projects');
    }

    /**
     * Quite similar to the standard transformation Function, but turned
     * by 90deg due to the fact that project cards are in a container that
     * is turned by 90deg
     * @todo Check if this documentation is actually correct. I just wrote
     *   this stuff down from my memory, which might be incorrect here
     * @see {CardAbstract}
     * @override
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @returns transformation with adjusted scale and 3d rotation
     */
    _transformationFunction(absoluteOrigin, mousePosition) {
        const rotAxis = LA.vector(absoluteOrigin, mousePosition),
            rotation =
                TF.advBellCurve(
                    absoluteOrigin, mousePosition, 0, 1, 2
                ) - 1,
            invRotAxis = [
                rotAxis[1],
                -rotAxis[0]
            ];

        return 'perspective(2000px) ' +
            'var(--transformable-element--initial-transform, ' +
            'translateZ(0)) ' +
            `rotate3d(${invRotAxis[0]}, ` +
            `${invRotAxis[1]}, 0, ${rotation}rad) ` +
            `scale(${TF
                .advBellCurve(absoluteOrigin, mousePosition,
                    0.9, 1, 2)}) ` +
            'translateZ(0) ';
    }

    /**
     * sets the correct surrounding background
     * @see {PostTransformFunctions}
     * @override
     * @param {event} event - event that caused the transformation
     * @param {TransformableElement} element - element that was
     *   transformed
     * @returns {void}
     */
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
        parent.style.setProperty(
            'background',
            background +
            ', 0 var(--projects--scroll-top, 0)  ' +
            'repeating-linear-gradient(45deg, var(--c1) 0px, ' +
            'var(--c0) 40px, var(--c1) 80px)');
    }
}
