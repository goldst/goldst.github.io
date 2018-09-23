import LA from '../math/LinearAlgebra.js';

/**
 * Provides basic and example methods that supply transformation values or
 * parts of it. Feel free to copy and modify them in your own project.
 * Especially have a look at scaleBellCurve for a complete solution for
 * scaling transformations and even better combined3d for a 3d
 * transformation that slightly follows your mouse pointer.
 */
export default class TransformationFunctions {
    /**
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @returns {number} absolute euclidean distance between the origin of
                         the transformation and the mouse position in px
     */
    static linearDistanceAbsolute(absoluteOrigin, mousePosition) {
        return LA.distance(absoluteOrigin, mousePosition);
    }

    /**
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @returns {number} Relative euclidean distance between the origin of
                         the transformation and the mouse position in px.
                         Values from 0 to 1 if element is perfectly
                         centered. If not, the value can be up to 2
     */
    static linearDistance(absoluteOrigin, mousePosition) {
        const absolute = this.linearDistanceAbsolute(absoluteOrigin,
                mousePosition),
            screenCorner = LA.vectorMultiply(this._screenSize(), 0.5),
            maxDistance = LA.distance([0, 0], screenCorner);

        return absolute / maxDistance;
    }

    /**
     * Smoother way to do transformations than linear ones. Also based on
     * distance, but because of the way this function works the return
     * value stays longer at a value near to the maximum than a negative
     * linear function.
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @returns {number} value between 0 and 1
     Smoother way to do transformations than linear
                         ones. Also based on distance, but because of the
                         way this function works the return value stays
                         longer at a value near to the maximum than a
                         negative linear function. Value always bigger
                         than 0 and the maximum is 1.
     */
    static simpleBellCurve(absoluteOrigin, mousePosition) {
        const x = this.linearDistance(absoluteOrigin, mousePosition);
        return Math.E ** -(x ** 2);
    }

    /**
     * Smoother way to do transformations than linear ones, advanced and
     * optimized for real use. Also based on distance, but because of the
     * way this function works the return value stays longer at a value
     * near to the maximum than a negative linear function.
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @param {number} [min=0.5] - minimum value for the returned values
     * @param {number} [max=1] - maximum value for the returned values
     * @param {number} [slope=3] - natural number. The bigger, the longer
                                   the returned value stays near to the
                                   maximum
     * @returns {number} value between min and max
     */
    static advBellCurve(absoluteOrigin, mousePosition,
        min=0.5, max=1, slope=3) {
        const x = this.linearDistance(absoluteOrigin, mousePosition);
        return 1/ (x ** (2 * slope) + 1) * (max-min) + min;
    }

    /**
     * composes a complete smooth scaling transformation based on the
     * mouse pointer's distance to the transformation's origin
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @returns {string} valid CSS tranformation-property
     */
    static scaleBellCurve(absoluteOrigin, mousePosition) {
        return `scale(${TransformationFunctions
            .advBellCurve(absoluteOrigin, mousePosition)})`;
    }

    /**
     * composes a complete smooth and light 3d transformation including
     * scaling and perspective based on the mouse pointer's distance to
     * the transformation origin
     * @param {number[]} absoluteOrigin - absolute transformation origin
     * @param {number[]} mousePosition - absolute mouse position
     * @returns {string} valid CSS tranformation-property
     */
    static combined3d(absoluteOrigin, mousePosition) {
        const rotAxis = LA.vector(absoluteOrigin, mousePosition),
            rotation = TransformationFunctions
                .advBellCurve(absoluteOrigin, mousePosition, 0, 1, 2) - 1,
            invRotAxis = [
                rotAxis[1],
                -rotAxis[0]
            ];

        return `perspective(2000px) ` +
               `rotate3d(${invRotAxis[0]}, ` +
               `${invRotAxis[1]}, 0, ${rotation}rad) ` +
               `scale(${TransformationFunctions
                   .advBellCurve(absoluteOrigin, mousePosition,
                       0.9, 1, 2)})`;
    }

    /**
     * @private
     * @returns {number[]} inner screen size in px
     */
    static _screenSize() {
        return [
            window.innerWidth,
            window.innerHeight
        ];
    }
}
