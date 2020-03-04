import LA
    from '../../js/math/LinearAlgebra.js';
import TF
    from '../../js/transformation/TransformationFunctions.js';

import CardAbstract from './CardAbstract.js';

/**
 * automates event based effects for card blocks with the --projects
 * modifier
 * @extends CardAbstract
 */
export default class CardProjects extends CardAbstract {
    /**
     * @returns {void}
     */
    constructor() {
        super(
            '--projects',
            CardProjects._postTransformFunction,
            () => {},
            CardProjects._transformationFunction
        );
    }

    /**
     * Quite similar to the standard transformation Function, but turned
     * by 90deg due to the fact that project cards are in a container that
     * is turned by 90deg
     * @todo Check if this documentation is actually correct. I just wrote
     *   this stuff down from my memory, which might be incorrect here
     * @see {CardAbstract}
     * @override
     * @param {object} args -  contains at least:
     *   {number[]} transformOrigin - absolute transformation origin
     *   {number[]} mousePosition - absolute mouse position
     * @returns {String} transformation with adjusted scale and 3d
     *   rotation
     */
    static _transformationFunction(args) {
        const
            rotAxis =
                LA.vector(
                    args.transformOrigin,
                    args.mousePosition
                ),
            rotation =
                TF.advBellCurve(
                    args.transformOrigin, args.mousePosition, 0, 1, 2
                ) - 1,
            invRotAxis = [
                rotAxis[1],
                -rotAxis[0]
            ];

        return {
            transform:
                'perspective(2000px) ' +
                'var(--transformable-element--initial-transform, ' +
                'translateZ(0)) ' +
                `rotate3d(${invRotAxis[0]}, ` +
                `${invRotAxis[1]}, 0, ${rotation}rad) ` +
                `scale(${
                    TF.advBellCurve(
                        args.transformOrigin, args.mousePosition,
                        0.9, 1, 2
                    )
                }) ` +
                'translateZ(0) '
        };
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
    static _postTransformFunction(event, element) {
        const bgElement = element.domElement.parentElement
            .getElementsByClassName('card--projects__background')[0];

        if(bgElement === undefined) { return; }

        bgElement.style.setProperty(
            'clip-path',
            `polygon(${
                element.cornerPointXYs.map(xy =>
                    `calc(${ xy[1]}px + 0.5 * var(--h)) ` +
                    `calc(${-xy[0]}px + var(--h) - 0.5 * var(--w))`
                ).join(', ')
            })`
        );
    }
}
