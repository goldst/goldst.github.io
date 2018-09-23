import DO from '../math/DegOperations.js';

/**
 * Point4ds are transformable homogenous coordinates.
 * @todo X, Y, Z, XY, XYZ throw if t=0. Explain in documentation.
 */
export default class Point4d {
    /**
     * @param {number} x - x-coordinate
     * @param {number} y - y-coordinate
     * @param {number} [z=0] - z-coordinate
     * @param {number} [t=1] - transformation, defines perspective.
     */
    constructor(x, y, z=0, t=1) {
        /**
         * @type {number}
         */
        this.x = x;
        /**
         * @type {number}
         */
        this.y = y;
        /**
         * @type {number}
         */
        this.z = z;
        /**
         * @type {number}
         */
        this.t = t;
    }

    /**
     * @returns {number} cartesian x-coordinate
     * @example
     *   new Point4d(1, 2, 3, 4).X //is 0.25
     */
    get X() {
        return this.x/this.t;
    }

    /**
     * @returns {number} cartesian y-coordinate
     * @example
     *   new Point4d(1, 2, 3, 4).Y //is 0.5
     */
    get Y() {
        return this.y/this.t;
    }

    /**
     * @returns {number} cartesian z-coordinate
     * @example
     *   new Point4d(1, 2, 3, 4).Z //is 0.75
     */
    get Z() {
        return this.z/this.t;
    }

    /**
     * @returns {number[]} cartesian x- and y-coordinates
     * @example
     *   new Point4d(1, 2, 3, 4).XY //is equal to [0.25, 0.5]
     */
    get XY() {
        return [
            this.X,
            this.Y
        ];
    }

    /**
     * @returns {number[]} cartesian x-, y- and z-coordinates
     * @example
     *   new Point4d(1, 2, 3, 4).XYZ //is equal to [0.25, 0.5, 0.75]
     */
    get XYZ() {
        return [
            this.X,
            this.Y,
            this.Z
        ];
    }

    /**
     * Return a transformed point using a 2d (3x3 homogenous) matrix.
     * z coordinate remains unchanged.
     * @param {number[]} M - 3x3 homogenous transformation matrix
     * @returns {Point4d} changed Point4d
     * @example
     *   const M = [
     *       [0, 1, 0],
     *       [0, 1, 0],
     *       [0, 0, 1]
     *   ];
     *   new Point4d(1, 2).matrix(M).XY //is equal to [2, 2]
     */
    matrix(M) {
        return new Point4d(
            this.x*M[0][0]+this.y*M[0][1]+this.t*M[0][2],
            this.x*M[1][0]+this.y*M[1][1]+this.t*M[1][2],
            this.z,
            this.x*M[2][0]+this.y*M[2][1]+this.t*M[2][2]
        );
    }

    /**
     * returns a transformed point using a 3d (4x4 homogenous) matrix
     * @param {number[]} M - 4x4 homogenous transformation matrix
     * @returns {Point4d} changed Point4d
     * @example
     *   const M = [
     *       [0, 1, 0, 0],
     *       [0, 0, 1, 0],
     *       [0, 0, 1, 0],
     *       [0, 0, 0, 1]
     *   ];
     *   new Point4d(1, 2, 3).matrix3d(M).XYZ //is equal to [2, 3, 3]
     */
    matrix3d(M) {
        return new Point4d(
            this.x*M[0][0]+this.y*M[0][1]+this.z*M[0][2]+this.t*M[0][3],
            this.x*M[1][0]+this.y*M[1][1]+this.z*M[1][2]+this.t*M[1][3],
            this.x*M[2][0]+this.y*M[2][1]+this.z*M[2][2]+this.t*M[2][3],
            this.x*M[3][0]+this.y*M[3][1]+this.z*M[3][2]+this.t*M[3][3]
        );
    }

    /**
     * returns a transformed point like CSS 'transform: perspective(d)'
     * does
     * @see https://mzl.la/2IIQUqD
     * @param {Number} d - Distance from the user to the z=0 plane.
     *   If it is 0 or a negative value, no perspective transform is
     *   applied. In px.
     * @returns {Point4d} changed Point4d
     * @example
     *   new Point4d(2, 2, 2, 2).perspective(2).t //is 1
     *   new Point4d(2, 2).perspective(-2).t //is 1
     */
    perspective(d) {
        if(d <= 0) { return this; }

        return this.matrix3d([
            [1, 0,    0, 0],
            [0, 1,    0, 0],
            [0, 0,    1, 0],
            [0, 0, -1/d, 1]
        ]);
    }

    /**
     * transforms point like CSS 'transform: rotate(a)' does
     * @see https://mzl.la/2IJlqRh
     * @param {Number} a - Angle of the rotation. A positive angle
     *   denotes a clockwise rotation, a negative angle a
     *   counter-clockwise one. In deg.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 0).rotate(90).XY //is equal to [0, 1]
     */
    rotate(a) {
        return this.matrix([
            [DO.cosDeg(a), -DO.sinDeg(a), 0],
            [DO.sinDeg(a),  DO.cosDeg(a), 0],
            [           0,             0, 1]
        ]);
    }

    /**
     * transforms point like CSS 'transform: rotate3d(x, y, z, a)' does
     * @see https://mzl.la/2s5Wt89
     * @param {Number} x - x-coordinate of the vector denoting the axis
     *   of rotation which could between 0 and 1.
     * @param {Number} y - y-coordinate of the vector denoting the axis
     *   of rotation which could between 0 and 1.
     * @param {Number} z - z-coordinate of the vector denoting the axis
     *   of rotation which could between 0 and 1.
     * @param {Number} a - angle of the rotation. A positive angle
     *   denotes a clockwise rotation, a negative angle a
     *   counter-clockwise one. In deg.
     * @returns {Point4d} changed Point4d
     * @example
     *   new Point4d(-1, -1, 0).rotate3d(0, 1, 0, 90).XYZ
     *   //is equal to [0, -1, -1]
     */
    rotate3d(x, y, z, a) {
        return this.matrix3d([
            [
                1 + (1-DO.cosDeg(a)) * (x**2 - 1),
                z * DO.sinDeg(a) + x * y * (1-DO.cosDeg(a)),
                -y * DO.sinDeg(a) + x * z * (1- DO.cosDeg(a)),
                0
            ], [
                -z * DO.sinDeg(a) + x * y * (1-DO.cosDeg(a)),
                1 + (1-DO.cosDeg(a)) * (y**2 - 1),
                x * DO.sinDeg(a) + y * z * (1-DO.cosDeg(a)),
                0
            ], [
                y * DO.sinDeg(a) + x * z * (1-DO.cosDeg(a)),
                -x * DO.sinDeg(a) + y * z * (1-DO.cosDeg(a)),
                1 + (1-DO.cosDeg(a)) * (z ** 2 - 1),
                0
            ], [
                0, 0, 0, 1
            ]
        ]);
    }

    /**
     * transforms point like CSS 'transform: rotateX(a)' does
     * @see https://mzl.la/2x6ZhqF
     * @param {Number} a - Angle of the rotation. A positive angle denotes
     *   a clockwise rotation, a negative angle a counter-clockwise one.
     *   In deg.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(0, -1).rotateX(180).XY //is equal to [0, 1]
     */
    rotateX(a) {
        return this.rotate3d(1, 0, 0, a);
    }

    /**
     * transforms point like CSS 'transform: rotateY(a)' does
     * @see https://mzl.la/2KQt6xx
     * @param {Number} a - Angle of the rotation. A positive angle denotes
     *   a clockwise rotation, a negative angle a counter-clockwise one.
     *   In deg.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(-1, 0).rotateY(180).XY //is equal to [1, 0]
     */
    rotateY(a) {
        return this.rotate3d(0, 1, 0, a);
    }

    /**
     * transforms point like CSS 'transform: rotateZ(a)' does
     * @see https://mzl.la/2KTCkcD
     * @param {Number} a - Angle of the rotation. A positive angle denotes
     *   a clockwise rotation, a negative angle a counter-clockwise one.
     *   In deg.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 0).rotate(90).XY //is equal to [0, 1]
     */
    rotateZ(a) {
        return this.rotate(a);
    }

    /**
     * transforms point like CSS 'transform: scale(x, y)' does
     * @see https://mzl.la/2IMSlAu
     * @todo didn't test ES6 version yet. test.
     * @param {Number} x - abscissa of the scaling vector
     * @param {Number} [y=x] - Ordinate of the scaling vector. If not
     *   defined, its default value is x, resulting in a uniform scaling
     *   that preserves the element's aspect ratio.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 2).scale(3, 4).XY //is equal to [3, 8]
     * @example new Point4d(1, 2).scale(3).XY //is equal to [3, 6]
     */
    scale(x, y=x) {
        return this.matrix([
            [x, 0, 0],
            [0, y, 0],
            [0, 0, 1]
        ]);
    }

    /**
     * transforms point like CSS 'transform: scale3d(x, y, z)' does
     * @see https://mzl.la/2IJ2MVC
     * @param {Number} x - abscissa of the scaling vector
     * @param {Number} y - ordinate of the scaling vector
     * @param {Number} z - z-component of the scaling vector
     * @returns {Point4d} changed Point4d
     * @example
     *   new Point4d(1, 2, 3).scale3d(6, 5, 4).XYZ
     *   //is equal to [6, 10, 12]
     */
    scale3d(x, y, z) {
        return this.matrix3d([
            [x, 0, 0, 0],
            [0, y, 0, 0],
            [0, 0, z, 0],
            [0, 0, 0, 1]
        ]);
    }

    /**
     * transforms point like CSS 'transform: scaleX(s)' does
     * @see https://mzl.la/2kp9HZC
     * @param {Number} s - scaling factor to apply on the abscissa
     *   of each point of the element
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 2).scaleX(3).XY //is equal to [3, 2]
     */
    scaleX(s) {
        return this.scale(s, 1);
    }

    /**
     * transforms point like CSS 'transform: scaleY(s)' does
     * @see https://mzl.la/2J0TAzc
     * @param {Number} s - scaling factor to apply on the ordinate
     *   of each point of the element
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 2).scaleY(3).XY //is equal to [1, 6]
     */
    scaleY(s) {
        return this.scale(1, s);
    }

    /**
     * transforms point like CSS 'transform: scaleZ(s)' does
     * @see https://mzl.la/2KRKOB3
     * @param {Number} s - scaling factor to apply on the z-coordinate of
     *   each point of the element
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 2, 3).scaleZ(3).XYZ //is equal to [1, 2, 9]
     */
    scaleZ(s) {
        return this.scale3d(1, 1, s);
    }

    /**
     * transforms point like CSS 'transform: skew(x, y)' does
     * @see https://mzl.la/2kqeVnQ
     * @param {Number} x - Angle to use to distort the element along the
     *   abscissa. In deg.
     * @param {Number} [y=0] - Angle to use to distort the element along
     *   the ordinate. In deg.
     * @returns {Point4d} changed Point4d
     * @example
     *   new Point4d(1, 2).skew(45).XY //is equal to [3, 2]
     *   new Point4d(1, 2).skew(45, -45).XY //is equal to [3, 1]
     */
    skew(x, y=0) {
        return this.matrix([
            [           1, DO.tanDeg(x), 0],
            [DO.tanDeg(y),            1, 0],
            [           0,            0, 1]
        ]);
    }

    /**
     * transforms point like CSS 'transform: skewX(a)' does
     * @see https://mzl.la/2xcKtXq
     * @param {Number} a - Angle to use to distort the element along the
     *   abscissa. In deg.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 2).skewX(45).X //is 3
     */
    skewX(a) {
        return this.skew(a);
    }

    /**
     * transforms point like CSS 'transform: skewY(a)' does
     * @see https://mzl.la/2sgggBM
     * @param {Number} a - Angle to use to distort the element along the
     *   ordinate. In deg.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 2).skewY(45).XY //is equal to [1, 3]
     */
    skewY(a) {
        return this.skew(0, a);
    }

    /**
     * transforms point like CSS 'transform: translate(x, y)' does
     * @see https://mzl.la/2IGzx9Q
     * @param {Number} x - Abscissa of the translating vector. In px.
     * @param {Number} [y=0] - Ordinate of the translating vector. In px.
     * @returns {Point4d} changed Point4d
     * @example
     *   new Point4d(1, 2).translate(-2).XY //is equal to [-1, 2]
     *   new Point4d(1, 2).translate(-2, 3).XY //is equal to [-1, 5]
     */
    translate(x, y=0) {
        return this.matrix([
            [1, 0, x],
            [0, 1, y],
            [0, 0, 1]
        ]);
    }

    /**
     * transforms point like CSS 'transform: translate3d(x, y, z)' does
     * @see https://mzl.la/2s5K6ZE
     * @param {Number} x - Abscissa of the translating vector. In px.
     * @param {Number} y - Ordinate of the translating vector. In px.
     * @param {Number} z - z-component of the translating vector. In px.
     * @returns {Point4d} changed Point4d
     * @example
     *   new Point4d(1, 2, 3).translate3d(-3, -2, -1).XYZ
     *   //is equal to [-2, 0, 2]
     */
    translate3d(x, y, z) {
        return this.matrix3d([
            [1, 0, 0, x],
            [0, 1, 0, y],
            [0, 0, 1, z],
            [0, 0, 0, 1]
        ]);
    }

    /**
     * transforms point like CSS 'transform: translateX(t)' does
     * @see https://mzl.la/2IL1kGm
     * @param {Number} t - Abscissa of the translating vector. In px.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 2).translateX(-2).X //is -1
     */
    translateX(t) {
        return this.translate(t);
    }

    /**
     * transforms point like CSS 'transform: translateY(t)' does
     * @see https://mzl.la/2GOb0tH
     * @param {Number} t - Ordinate of the translating vector. In px.
     * @returns {Point4d} changed Point4d
     * @example new Point4d(1, 2).translateY(-2).XY //is equal to [1, 0]
     */
    translateY(t) {
        return this.translate(0, t);
    }

    /**
     * transforms point like CSS 'transform: translateZ(t)' does
     * @see https://mzl.la/2JeSLD3
     * @param {Number} t - z-component of the translating vector. A
     *   positive value moves the element towards the viewer, and a
     *   negative value further away.
     * @returns {Point4d} changed Point4d
     * @example
     *   new Point4d(1, 2, 3).translateZ(-2).XYZ //is equal to [1, 2, 1]
     */
    translateZ(t) {
        return this.translate3d(0, 0, t);
    }
}
