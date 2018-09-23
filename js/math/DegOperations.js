/**
 * everything that has to do with angles, especially with conversions
 * from and to degree
 */
export default class DegOperations {
    /**
     * converts radians to degrees
     * @param {number} d - number in degree
     * @returns {number} number in radians
     * @example
     *   DegOperations.rad(0) //is 0
     *   DegOperations.rad(90) === Math.PI/2 //is true
     *   DegOperations.rad(180) === Math.PI //is true
     */
    static rad(d) {
        return d * Math.PI / 180;
    }

    /**
     * converts degrees to radians
     * @param {number} r - number in radians
     * @returns {number} number in degree
     * @example
     *   DegOperations.deg(0) //is 0
     *   DegOperations.deg(Math.PI) //is 180
     */
    static deg(r) {
        return r * 180 / Math.PI;
    }

    /**
     * calculates sines with value in degrees
     * @param {number} a - abscissa for the sines function in degrees
     * @returns {number} sines value
     * @example
     *   DegOperations.sinDeg(0)  //is 0
     *   DegOperations.sinDeg(90) //is 1
     */
    static sinDeg(a) {
        return Math.sin(this.rad(a));
    }

    /**
     * calculates cosines with value in degrees
     * @param {number} a - abscissa for the cosines function in degrees
     * @returns {number} cosines value
     * @example
     *   DegOperations.cosDeg(0)   //is 1
     *   DegOperations.cosDeg(90)  //is 0
     *   DegOperations.cosDeg(180) //is -1
     *   DegOperations.cosDeg(270) //is 0
     */
    static cosDeg(a) {
        //due to the conversion to rad, cosDeg(90) and others aren't
        //exactly 0 with the standard way of calculation. Thus, these cases
        //have to be handeled seperately.
        if(a % 90 === 0 && a % 180 !== 0) {
            return 0;
        }

        return Math.cos(this.rad(a));
    }

    /**
     * calculates tangent with value in degrees
     * @param {number} a - abscissa for the tangent function in degrees
     * @returns {number} tangent value
     * @example
     *   DegOperations.tanDeg(0)  //is 0
     *   DegOperations.tanDeg(90) //is 16331239353195370
     */
    static tanDeg(a) {
        return Math.tan(this.rad(a));
    }

    /**
     * calculates arctangent in degrees
     * @param {number} x - abscissa for the arctangent function
     * @returns {number} arctangent value in degrees
     * @example
     *   DegOperations.atanDeg(0) //is 0
     *   DegOperations.atanDeg(16331239353195370) //is 90
     */
    static atanDeg(x) {
        return this.deg(Math.atan(x));
    }

    /**
     * calculates ascent of two two-dimentsional points in radians
     * @param {number[]} p0 - first of two two-dimensional points
     * @param {number[]} p1 - second of two two-dimensional points
     * @returns {number} ascent in rad
     * @example
     *   const p0 = [0, 0],
     *       p1 = [1, 1];
     *   DegOperations.ascent(p0, p1) === Math.PI/4 //is true
     * @example
     *   const p0 = [0, 0],
     *       p1 = [1, 0];
     *   DegOperations.ascent(p0, p1) //is 0
     */
    static ascent(p0, p1) {
        return Math.atan2(p1[1]-p0[1], p1[0]-p0[0]);
    }

    /**
     * calculates ascent of two two-dimentsional points in degrees
     * @param {number[]} p0 - first of two two-dimensional points
     * @param {number[]} p1 - second of two two-dimensional points
     * @returns {number} ascent in deg
     * @example
     *   const p0 = [0, 0],
     *       p1 = [1, 1];
     *   DegOperations.ascentDeg(p0, p1) //is 45
     * @example
     *   const p0 = [0, 0],
     *       p1 = [1, 0];
     *   DegOperations.ascentDeg(p0, p1) //is 0
     */
    static ascentDeg(p0, p1) {
        return this.deg(this.ascent(p0, p1));
    }

    /**
     * Sometimes, it's inpractical when the angles are bigger than a half
     * turn or smaller than -a half turn. This function aims to avoid this
     * problem by 'normalizing' the value
     * @param {number} val - initial angle in rad that might be too big or
     *   small
     * @returns {number} angle between -πrad and πrad
     * @example
     *   DegOperations.simplifyRotation(0) //is 0
     *   DegOperations.simplifyRotation(2 * Math.PI) //is 0
     *   DegOperations.simplifyRotation(10 * Math.PI + 1) //is 1
     */
    static simplifyRotation(val) {
        let out = val;
        while(out>=Math.PI) {
            out -= Math.PI * 2;
        }

        while(out< -Math.PI) {
            out += Math.PI * 2;
        }

        return out;
    }
}
