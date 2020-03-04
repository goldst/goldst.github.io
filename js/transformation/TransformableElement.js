import Point4d from './Point4d.js';
import DO from '../math/DegOperations.js';
import LA from '../math/LinearAlgebra.js';
import ECE from '../eventControl/EventControlElement.js';

/**
 * helps with setting, fetching and
 * interpreting CSS transformations
 */
export default class TransformableElement extends ECE {
    /**
     * @param {object} domElement - DOM element that is transformed
     * @param {object} cssClasses - CSS classes that will be added to the
     *   dom element
     */
    constructor(domElement, cssClasses) {
        /**
         * @type {object}
         */
        super(domElement, cssClasses.concat(['transformable-element']));
        this._storeInitialTransform();
        this.updateCornerPoints();
    }

    /**
     * currently equal to {updateCornerPoints}
     * @todo where is this used, why is this necessary, what does this
     *   override?
     * @returns {void}
     */
    update() {
        this.updateCornerPoints();
    }

    /**
     * sets the internal corner points to the points of
     * the actual DOM element
     * @returns {void}
     */
    updateCornerPoints() {
        this._setInitialCornerPoints();
        this._initialInternalTransform();
    }

    /**
     * sets the internal corner points to the points of
     * the actual DOM element, without paying attention to its
     * transformation value
     * @private
     * @returns {void}
     */
    _setInitialCornerPoints() {
        const size = this._size,
            origin = this._transformOrigin;

        /**
         * element corners relative to transformation origin
         * in the following order:
         *
         *   3---------0
         *   |         |
         *   |         |
         *   2---------1
         *
         * @type {number[]}
         */
        this.cornerPoints = [
            new Point4d(size[0]-origin[0],        -origin[1]),
            new Point4d(size[0]-origin[0], size[1]-origin[1]),
            new Point4d(       -origin[0], size[1]-origin[1]),
            new Point4d(       -origin[0],        -origin[1])
        ];
    }

    /**
     * @return {number[]} cartesian x values of all corner points
     */
    get cornerPointXs () {
        return this.cornerPoints.map(cp => cp.X);
    }

    /**
     * @return {number[]} cartesian y values of all corner points
     */
    get cornerPointYs () {
        return this.cornerPoints.map(cp => cp.Y);
    }

    /**
     * @return {number[]} cartesian z values of all corner points
     */
    get cornerPointZs () {
        return this.cornerPoints.map(cp => cp.Z);
    }

    /**
     * @return {Array.<number[]>} cartesian x and y values of all corner
     *   points
     */
    get cornerPointXYs () {
        return this.cornerPoints.map(cp => cp.XY);
    }

    /**
     * @private
     * @returns {number[]} origin of transformation in px
     */
    get _transformOrigin() {
        return this._getPropertyValue('transform-origin')
            .split(' ')
            .map(parseFloat);
    }

    /**
     * changes untransformed internal corner points to their correct,
     * transformed position
     * @private
     * @returns {void}
     */
    _initialInternalTransform() {
        this.internalTransform(
            this._getPropertyValue('transform')
        );
    }

    /**
     * transforms internal edge points according to a transformation in
     * css syntax
     * @todo Function only supports matrices. Add other types.
     * @param {string} css - CSS <transform-function> value. Only one
                             function at a time is allowed. See
                             https://mzl.la/2JhGw8A for syntax.
     * @returns {void}
     */
    internalTransform(css) {
        if(css === 'none') {
            return;
        }

        const transformation = css.slice(0, -1)
            .split('(');

        const M = transformation[1]
            .split(', ')
            .map(parseFloat);

        switch(transformation[0]) {
        case 'matrix':
            this.internalMatrix([
                [M[0], M[2], M[4]],
                [M[1], M[3], M[5]],
                [   0,    0,    1]
            ]);
            break;

        case 'matrix3d':
            this.internalMatrix3d([
                [M[0], M[4],  M[8], M[12]],
                [M[1], M[5],  M[9], M[13]],
                [M[2], M[6], M[10], M[14]],
                [M[3], M[7], M[11], M[15]]
            ]);
            break;
        }
    }

    /**
     * generates background that surrounds the transformed element
     * @todo I don't like the  ' + Math.PI' in the loop because there is
             no plausible reason for that for the reader. Some minor
             refactoring on this would be nice.
     * @todo still some issues with high translate values (test case:
             directly applied 'perspective(1000px) rotateZ(182deg)
             rotateY(60deg) translateX(200px) translateY(-300px)' on a
             450x450 div (equal size background)) probable reason:
             css-gradient doesn't support negative numbers
     * @param {string} col1 - css color name or code for the surrounding
                              color.
     * @param {number[]} [size = this._size] - Width and height of the
                                               bg element. Normally
                                               and thus when no value is
                                               given, equal to the size of
                                               the foreground dom element.
     * @param {string} [col2='transparent'] - CSS color name or code for
                                              the color behind the
                                              transformed element. Due to
                                              the way CSS linear-gradients
                                              work, this value should
                                              always be transparent or
                                              equal to col1, but with a
                                              lower opacity. Everything
                                              else could result in a
                                              broken background.
     * @param {number} [margin=0] - Additional pixels to the surrounding
                                    to prevent flickering lines of col2.
                                    Set to 0 by default but in most cases
                                    more is recommended.
     * @returns {string} CSS background that can be applied or appended to
                        a parent element
     */
    surroundingBackground(col1='black', size=this._size,
        col2='transparent', margin=0) {
        const
            sa = this._surroundingAscents,
            sd = this._surroundingDistances(sa, size);

        let out = '';

        for(let i = 0; i<4; i++) {
            out += `linear-gradient(${sa[i] + Math.PI}rad, ` +
                   `${col1} ${sd[i]+margin}px, ` +
                   `${col2} ${sd[i]+margin}px), `;
        }
        return out.slice(0, -2);
    }

    /**
     * transforms internal corner points using a 2d (3x3 homogenous) matrix
     * z coordinate remains unchanged.
     * @param {number[]} M - 3x3 homogenous transformation matrix
     * @returns {void}
     */
    internalMatrix(M) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.matrix(M));
    }

    /**
     * transforms internal corner points using a 3d (4x4 homogenous) matrix
     * @param {number[]} M - 4x4 homogenous transformation matrix
     * @returns {void}
     */
    internalMatrix3d(M) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.matrix3d(M));
    }

    /**
     * transforms internal corner points like CSS
     * 'transform: perspective(d)' does
     * @see https://mzl.la/2IIQUqD
     * @param {Number} d - Distance from the user to the z=0 plane.
                           If it is 0 or a negative value, no perspective
                           transform is applied. In px.
     * @returns {void}
     */
    internalPerspective(d) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.perspective(d));
    }

    /**
     * transforms internal corner points like CSS 'transform: rotate(a)'
     * does
     * @see https://mzl.la/2IJlqRh
     * @param {Number} a - Angle of the rotation. A positive angle
                           denotes a clockwise rotation, a negative
                           angle a counter-clockwise one. In deg.
     * @returns {void}
     */
    internalRotate(a) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.rotate(a));
    }

    /**
     * transforms internal corner points like CSS
     * 'transform: rotate3d(x, y, z, a)' does
     * @see https://mzl.la/2s5Wt89
     * @param {Number} x - x-coordinate of the vector denoting the axis
                           of rotation which could between 0 and 1.
     * @param {Number} y - y-coordinate of the vector denoting the axis
                           of rotation which could between 0 and 1.
     * @param {Number} z - z-coordinate of the vector denoting the axis
                           of rotation which could between 0 and 1.
     * @param {Number} a - angle of the rotation. A positive angle
                           denotes a clockwise rotation, a negative angle
                           a counter-clockwise one. In deg.
     * @returns {void}
     */
    internalRotate3d(x, y, z, a) {
        this.cornerPoints = this.cornerPoints.map(cp =>
            cp.rotate3d(x, y, z, a));
    }

    /**
     * transforms internal corner points like CSS 'transform: rotateX(a)'
     * does
     * @see https://mzl.la/2x6ZhqF
     * @param {Number} a - Angle of the rotation. A positive angle
                           denotes a clockwise rotation, a negative
                           angle a counter-clockwise one. In deg.
     * @returns {void}
     */
    internalRotateX(a) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.rotateX(a));
    }

    /**
     * transforms internal corner points like CSS 'transform: rotateY(a)'
     * does
     * @see https://mzl.la/2KQt6xx
     * @param {Number} a - Angle of the rotation. A positive angle
                           denotes a clockwise rotation, a negative
                           angle a counter-clockwise one. In deg.
     * @returns {void}
     */
    internalRotateY(a) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.rotateY(a));
    }

    /**
     * transforms internal corner points like CSS 'transform: rotateZ(a)'
     * does
     * @see https://mzl.la/2KTCkcD
     * @param {Number} a - Angle of the rotation. A positive angle
                           denotes a clockwise rotation, a negative
                           angle a counter-clockwise one. In deg.
     * @returns {void}
     */
    internalRotateZ(a) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.rotateZ(a));
    }

    /**
     * transforms internal corner points like CSS 'transform: scale(x, y)'
     * does
     * @see https://mzl.la/2IMSlAu
     * @param {Number} x - abscissa of the scaling vector
     * @param {Number} [y=x] - Ordinate of the scaling vector.
                               If not defined, its default value is x,
                               resulting in a uniform scaling that
                               preserves the element's aspect ratio.
     * @returns {void}
     */
    internalScale(x, y) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.scale(x, y));
    }

    /**
     * transforms internal corner points like CSS
     * 'transform: scale3d(x, y, z)' does
     * @see https://mzl.la/2IJ2MVC
     * @param {Number} x - abscissa of the scaling vector
     * @param {Number} y - ordinate of the scaling vector
     * @param {Number} z - z-component of the scaling vector
     * @returns {void}
     */
    internalScale3d(x, y, z) {
        this.cornerPoints = this.cornerPoints.map(cp =>
            cp.scale3d(x, y, z));
    }

    /**
     * transforms internal corner points like CSS 'transform: scaleX(s)'
     * does
     * @see https://mzl.la/2kp9HZC
     * @param {Number} s - scaling factor to apply on the abscissa
                           of each point of the element
     * @returns {void}
     */
    internalScaleX(s) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.scaleX(s));
    }

    /**
     * transforms internal corner points like CSS 'transform: scaleY(s)'
     * does
     * @see https://mzl.la/2J0TAzc
     * @param {Number} s - scaling factor to apply on the ordinate
                           of each point of the element
     * @returns {void}
     */
    internalScaleY(s) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.scaleY(s));
    }

    /**
     * transforms internal corner points like CSS 'transform: scaleZ(s)'
     * does
     * @see https://mzl.la/2KRKOB3
     * @param {Number} s - scaling factor to apply on the z-coordinate
                           of each point of the element
     * @returns {void}
     */
    internalScaleZ(s) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.scaleZ(s));
    }

    /**
     * transforms internal corner points like CSS 'transform: skew(x, y)'
     * does
     * @see https://mzl.la/2kqeVnQ
     * @param {Number} x - Angle to use to distort the element
                           along the abscissa. In deg.
     * @param {Number} [y=0] - Angle to use to distort the element
                               along the ordinate. If not defined,
                               its default value is 0, resulting in a
                               purely horizontal skewing. In deg.
     * @returns {void}
     */
    internalSkew(x, y) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.skew(x, y));
    }

    /**
     * transforms internal corner points like CSS 'transform: skewX(a)'
     * does
     * @see https://mzl.la/2xcKtXq
     * @param {Number} a - Angle to use to distort the element
                           along the abscissa. In deg.
     * @returns {Point4d} changed Point4d
     */
    internalSkewX(a) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.skewX(a));
    }

    /**
     * transforms internal corner points like CSS 'transform: skewY(a)'
     * does
     * @see https://mzl.la/2sgggBM
     * @param {Number} a - Angle to use to distort the element
                           along the ordinate. In deg.
     * @returns {void}
     */
    internalSkewY(a) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.skewY(a));
    }

    /**
     * transforms internal corner points like CSS
     * 'transform: translate(x, y)' does
     * @see https://mzl.la/2IGzx9Q
     * @param {Number} x - Abscissa of the translating vector. In px.
     * @param {Number} [y=0] - Ordinate of the translating vector.
                               If unspecified, its default value is 0.
                               For example, translate(2) is equivalent
                               to translate(2, 0). In px.
     * @returns {void}
     */
    internalTranslate(x, y) {
        this.cornerPoints = this.cornerPoints.map(cp =>
            cp.translate(x, y));
    }

    /**
     * transforms internal corner points like CSS
     * 'transform: translate3d(x, y, z)' does
     * @see https://mzl.la/2s5K6ZE
     * @param {Number} x - Abscissa of the translating vector. In px.
     * @param {Number} y - Ordinate of the translating vector. In px.
     * @param {Number} z - z-component of the translating vector. In px.
     * @returns {void}
     */
    internalTranslate3d(x, y, z) {
        this.cornerPoints = this.cornerPoints.map(cp =>
            cp.translate3d(x, y, z));
    }

    /**
     * transforms internal corner points like CSS
     * 'transform: translateX(t)' does
     * @see https://mzl.la/2IL1kGm
     * @param {Number} t - Abscissa of the translating vector. In px.
     * @returns {void}
     */
    internalTranslateX(t) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.translateX(t));
    }

    /**
     * transforms internal corner points like CSS
     * 'transform: translateY(t)' does
     * @see https://mzl.la/2GOb0tH
     * @param {Number} t - Ordinate of the translating vector. In px.
     * @returns {void}
     */
    internalTranslateY(t) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.translateY(t));
    }

    /**
     * transforms internal corner points like CSS
     * 'transform: translateZ(t)' does
     * @see https://mzl.la/2JeSLD3
     * @param {Number} t - z-component of the translating vector.
                           A positive value moves the element towards
                           the viewer, and a negative value further away.
     * @returns {void}
     */
    internalTranslateZ(t) {
        this.cornerPoints = this.cornerPoints.map(cp => cp.translateZ(t));
    }

    /**
     * @returns {Array.<number[]>} cartesian x- and y-coordinates of
     *                             corner points
     */
    get XY() {
        return this.cornerPoints.map(cp => cp.XY);
    }

    /**
     * finds out the coordinates of magic corners depending on the
     * angle of the gradient line
     * @see https://mzl.la/2LdlQMv for explaination what
            a magic corner is
     * @private
     * @param {number[]} ascents - array containing the ascents of the
                                   elements's sides in rad
     * @param {number[]} size - width and height of the background
     * @returns {Array.<Number[]>} coordinates of the magic corners
     */
    _magicCorners(ascents, size) {
        const origin = this._transformOrigin;

        let out = [];
        ascents.forEach(function(a) {
            if(a < -Math.PI/2) {
                out.push([       -origin[0], size[1]-origin[1]]);

            } else if (a < 0) {
                out.push([       -origin[0],        -origin[1]]);

            } else if (a < Math.PI/2) {
                out.push([size[0]-origin[0],        -origin[1]]);

            } else {
                out.push([size[0]-origin[0], size[1]-origin[1]]);

            }
        });

        return out;
    }

    /**
     * generates ascents between the points for further use, for example
     * in surroundingBackground()
     * @private
     * @todo How ugly! Needs a loop. But is a loop possible without
             harming readability? Further research - Ask on StackOverflow?
     * @returns {number[]} ascents between the corner points in rad
     */
    get _surroundingAscents() {
        const cp = this.cornerPoints;
        return [
            DO.ascent(cp[0].XY, cp[1].XY),
            DO.ascent(cp[1].XY, cp[2].XY),
            DO.ascent(cp[2].XY, cp[3].XY),
            DO.ascent(cp[3].XY, cp[0].XY)
        ];
    }

    /**
     * calculates the shortest distances to the corresponding magic
     * corners
     * @see https://mzl.la/2LdlQMv for magic corners
     * @private
     * @todo might be better with loop. see _surroundingAscents().
     * @param {number[]} ascents - array containing the ascents of the
                                   elements's sides in rad
     * @param {number[]} size - width and height of the background
     * @returns {number[]} distances of the points to their respective
                           magic corner
     */
    _surroundingDistances(ascents, size) {
        const
            cp = this.cornerPoints,
            mc = this._magicCorners(ascents, size);

        return [
            LA.shortestDistance(mc[0], cp[0].XY, cp[1].XY),
            LA.shortestDistance(mc[1], cp[1].XY, cp[2].XY),
            LA.shortestDistance(mc[2], cp[2].XY, cp[3].XY),
            LA.shortestDistance(mc[3], cp[3].XY, cp[0].XY)
        ];
    }

    /**
     * runs a css transformation
     * @param {string} css - css value for the transformation
     * @param {boolean} [alsoTransformInternal = true] - defines if the
                                               internal information should
                                               be transformed too. Set to
                                               true by default, but call
                                               should be called with false
                                               if element is managed with
                                               TransformationController
     * @returns {void}
     */
    transform(css, alsoTransformInternal = true) {
        this._setProperty('transform', css);
        if(alsoTransformInternal) {
            this._initialInternalTransform();
        }
    }

    /**
     * stores initial CSS transformation in css variable
     * '--transformable-element-initial-transform'. This is necessary at
     * the creation of the object to later being able to calculate the
     * absolute transformation origin.
     * @private
     * @returns {void}
     */
    _storeInitialTransform() {
        const initialTransform = this._getPropertyValue('transform'),
            value =
                initialTransform === 'none' ?
                    '' :
                    initialTransform;

        this._setVariable(
            'transformable-element', 'initial-transform',
            value
        );
    }

    /**
     * @returns {string} initial CSS transformation as matrix/matrix3d or
     *   'none' (cached).
     */
    get initialTransform() {
        if(this._initialTransform === undefined) {
            this._initialTransform = this._getVariable(
                'transformable-element', 'initial-transform'
            );
        }
        return this._initialTransform;
    }

    /**
     * @returns {number[]} Absolute coordinates of the transformation
     *   origin of the DOM element
     * @todo returns center of element ATM. change it to the origin.
     *   it's not necessary to redo the whole function! only a change of
     *   the last few lines.
     */
    get absoluteTransformOriginApprox() {
        this._setProperty(
            'transform', this.initialTransform
        );

        const rect = this.rect;

        this._setProperty('transform', '');

        return [
            (rect.left + rect.right) / 2,
            (rect.top + rect.bottom) / 2
        ];
    }
}
