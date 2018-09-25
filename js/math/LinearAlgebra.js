/**
 * linear algebra operations, like common calculations with vectors
 */
export default class LinearAlgebra {
    /**
     * creates vector between points p0 and p1 of equal dimensions
     * @param {number[]} p0 - first point
     * @param {number[]} p1 - second point
     * @returns {number[]} the vector from the input points
     * @throws {Error} 'input lengths are not equal' if p0 & p1 have
     *   different lengths (= different number of dimensions)
     * @example
     *   LinearAlgebra.vector([0, 0], [0, 0]) //is equal to [0, 0]
     * @example
     *   const
     *       p0 = [0, 2, 3, 1],
     *       p1 = [2, 4, 5, 3];
     *   LinearAlgebra.vector(p0, p1) //is equal to [2, 2, 2, 2]
     *   LinearAlgebra.vector([1, 2], [3, 4, 5]); //throws an error
     */
    static vector(p0, p1) {
        if(p0.length !== p1.length) {
            throw 'input lengths are not equal';
        }

        let out = [];
        for(let i = 0; i<p0.length; i++) {
            out.push(p1[i] - p0[i]);
        }
        return out;
    }

    /**
     * adds vector or point v0 to vector or point v1
     * @param {number[]} v0 - first summand
     * @param {number[]} v1 - second summand
     * @returns {number[]} sum of the inputs
     * @throws {Error} 'input lengths are not equal' if v0 & v1 have
     *   different lengths (= different number of dimensions)
     * @todo rewrite vector add, substract, multiply and divide with
     *   array.map
     * @example
     *   LinearAlgebra.vectorAdd([0, 1], [2, 3]) //is equal to [2, 4]
     *   LinearAlgebra.vectorAdd([0], [1, 2, 3]) //throws an error
     */
    static vectorAdd(v0, v1) {
        if(v0.length !== v1.length) {
            throw 'input lengths are not equal';
        }

        let out = [];
        for(let i = 0; i<v0.length; i++) {
            out.push(v0[i] + v1[i]);
        }
        return out;
    }

    /**
     * Subtracts vector or point p1 from vector or point p0. Equal to
     *   vector(p1, p0)
     * @param {number[]} v0 - minuend
     * @param {number[]} v1 - subtrahend
     * @returns {number[]} difference of the inputs
     * @throws {Error} 'input lengths are not equal' if v0 & v1 have
     *   different lengths (= different number of dimensions)
     * @example
     *   LinearAlgebra.vectorSubtract([3, 2], [2, 1]) //is equal to [1, 1]
     *   LinearAlgebra.vectorSubtract([0], [1, 2, 3]) //throws an error
     */
    static vectorSubtract(v0, v1){
        return this.vector(v1, v0);
    }

    /**
     * Multiplies a vector with a number.
     * @param {number[]} v - input vector
     * @param {number} n - input number
     * @returns {number} output vector
     * @example
     *   LinearAlgebra.vectorMultiply([1, -2, 0], 2)
     *   //is equal to [2, -4, 0]
     */
    static vectorMultiply(v, n) {
        let out = [];
        for(let i = 0; i<v.length; i++) {
            out.push(v[i] * n);
        }
        return out;
    }

    /**
     * Divides a vector by a number.
     * @param {number[]} v - input vector
     * @param {number} n - input number
     * @returns {number} output vector
     * @example
     *   LinearAlgebra.vectorDivide([1, 2, 3], 2)
     *   //is equal to [0.5, 1, 1.5]
     */
    static vectorDivide(v, n) {
        let out = [];
        for(let i = 0; i<v.length; i++) {
            out.push(v[i] / n);
        }
        return out;
    }

    /**
     * calculates the dot product of two vectors of equal dimensions
     * @param {number[]} v0 - first vector
     * @param {number[]} v1 - second vector
     * @returns {number[] | void} dot product
     * @throws {Error} 'input lengths are not equal' if v0 & v1 have
     *   different lengths (= different number of dimensions)
     * @example
     *   LinearAlgebra.vectorDotProduct([1, 1], [1, -1]) //is 0
     */
    static vectorDotProduct(v0, v1) {
        if(v0.length !== v1.length) {
            throw 'input lengths are not equal';
        }

        let out = 0;
        for(let i = 0; i<v0.length; i++) {
            out += v1[i] * v0[i];
        }
        return out;
    }

    /**
     * calculates the length of a vector using the euclidean distance
     * @see https://en.wikipedia.org/wiki/Euclidean_distance
     * @param {number[]} v - input vector, described through an array
     * @returns {number} length of the input vector
     * @example
     *   LinearAlgebra.vectorLength([4, 4, -4, 4]) //is 8
     */
    static vectorLength(v) {
        return Math.hypot(...v);
    }

    /**
     * calculates the euclidean distance between two points
     * @param {number[]} p0 - first point
     * @param {number[]} p1 - second point
     * @returns {number} distance between p0 and p1
     * @throws {Error} 'input lengths are not equal' if p0 & p1 have
     *   different lengths (= different number of dimensions)
     * @example
     *   LinearAlgebra.distance([0, 1, 2, 3], [4, -3, 6, 7]) //is 8
     *   LinearAlgebra.distance([0, 1], [2]) //throws an error
     */
    static distance(p0, p1) {
        return this.vectorLength(
            this.vector(p0, p1)
        );
    }

    /**
     * calculates the inner inner product angle in rad  of two vectors of
     * equal dimensions
     * @see https://commons.wikimedia.org/wiki/File:Inner-product-angle.png
     * @param {number[]} v0 - first vector
     * @param {number[]} v1 - second vector
     * @returns {number[]} inner product angle
     * @throws {Error} 'input lengths are not equal' if p0 & p1 have
     *   different lengths (= different number of dimensions)
     * @example
     *   const v0 = [1, 0], v1 = [0, 1];
     *   LinearAlgebra.innerProductAngle(v0, v1) === Math.PI/2 //is true
     * @example
     *   LinearAlgebra.innerProductAngle([0, 1], [2]) //throws an error
     */
    static innerProductAngle(v0, v1) {
        if(v0.length !== v1.length) {
            throw 'input lengths are not equal';
        }

        return Math.acos(
            this.vectorDotProduct(v0, v1) /
            (this.vectorLength(v0) * this.vectorLength(v1))
        );
    }

    /**
     * calculates the shortest distance between a point O
     * and a line, defined through two points p0 and p1
     * @param {number[]} O - point where the distance starts
     * @param {number[]} P0 - point 1 of the line on which the ending
         point of the distance lies
     * @param {number[]} P1 - point 2 of the line on which the ending
         point of the distance lies
     * @returns {number} distance between a and the closest point on
         the line
     * @throws {Error} 'input lengths are not equal' if O, P0 & P1 have
     *   different lengths (= different number of dimensions)
     * @example
     *   LinearAlgebra.shortestDistance([0, 0],
     *                                  [1, 1],
     *                                  [2, 1]) //is 1
     *   LinearAlgebra.shortestDistance([1], [2, 3], [4])
     *   //throws an error
     */
    static shortestDistance(O, P0, P1) {
        //capital letters = point or vectors (number[])
        //other letters = angles (number)

        //Calculates the position of point A( O[0] | ? ) on line P0P1.
        //The term below is made by:
        //    P0 + r * (P0 - P0) = A
        //A[0] is O[0]. A[1] is sought for. Thus:
        //    P0[0] + r * (P0[0] - P0[0]) = O[0]
        //    P0[1] + r * (P0[1] - P0[1]) = A[1]
        //Transforming the two equations (r = r) results in
        //the term below for A[1].
        const A = [
            O[0],
            P0[1] + ((O[0] - P0[0]) / (P1[0] - P0[0])) * (P1[1] - P0[1])
        ];

        //If the equation above has no solution, the line P0P1 is parallel
        //to the x=O[0] line. In that case, the shortest distance is the
        //distance between O and the point on P0P1 with y=O[1].
        if(A[1] === Infinity) {
            return Math.abs(O[0] - P0[0]);
        }

        //Calculates the vectors (here: arrays) that are necessary to
        //calculate angle a in the next step.
        const
            AO = this.vector(A, O),
            AP = this.vector(A, P0),
            a = this.innerProductAngle(AO, AP);

        //Angle between the line describing the sought distance and P0P1
        //is 90deg.
        //calculates and returns length using the law of sines:
        //       |AO|          ?
        //    ----------  =  ------
        //    sin(90°)=1     sin(a)
        //
        //    ? = |AO| * sin(a)
        return this.vectorLength(AO) * Math.sin(a);
    }

    /**
     * returns a n*n identity matrix
     * @param {number} n - matrix width/height
     * @returns {Array.<number[]>} identity matrix with n rows and columns
     * @example
     *   LinearAlgebra.matrixIdentity(3)
     *       //is equal to [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
     */
    static matrixIdentity(n) {
        let out = [];

        for(let row = 0; row < n; row++) {
            let inner = [];
            for(let col = 0; col < n; col++) {
                inner.push(row===col ? 1 : 0);
            }
            out.push(inner);
        }

        return out;
    }

    /**
     * creates a matrix that is basically the two input matrices next to
     * each other
     * @param {Array.<number[]>} M0 - first input matrix
     * @param {Array.<number[]>} M1 - second input matrix
     * @returns {Array.<number[]>} augmented matrix M0M1
     * @example
     *   LinearAlgebra.matrixAugment([[1], [3]], [[2], 4])
     *       //is equal to [[1, 2], [3, 4]]
     */
    static matrixAugment(M0, M1) {
        if(M0.length !== M1.length) {
            throw 'input lengths are not equal';
        }

        return M0.map((row, index) => row.concat(M1[index]));
    }

    /**
     * removes rows and columns at the end and/or the beginning of a
     * matrix
     * @param {Array.<number[]>} M - input matrix
     * @param {number} [beginRow = 0] - row where the output matrix starts
     * @param {number} [beginColumn = 0] - column where the output matrix
     * @param {number} [endRow = M.length] - row where the output matrix
     *   ends
     * @param {number} [endColumn = M[0].length] - column where the output
     *   matrix ends
     * @returns {Array.<number[]>} sliced matrix M₁
     * @example
     *   LinearAlgebra.matrixSlice([[0, 1], [2, 3]])
     *       //is equal to [[0, 1], [2, 3]]
     * @example [[Description]]
     *   LinearAlgebra.matrixSlice([[8,8,8],[8,9,8],[8,8,8]], 1, 1, 1, 1)
     *   //is equal to [[9]]
     */
    static matrixSlice(M,
        beginRow = 0, beginColumn = 0,
        endRow = M.length, endColumn = M[0].length) {

        const
            slicedRows = M.slice(beginRow, endRow),
            slicedAll =
                slicedRows.map(
                    row => row.slice(beginColumn, endColumn)
                );

        return slicedAll;
    }

    /**
     * Sorry, i forgot what this does. THat's the problem with personal
     * projects, there is no reason to hurry or to watch your coding style
     * and then you just forget stuff. I don't think this function it is
     * necessary though.I might delete it soon.
     * @param {Array.<number[]>} M0 first matrix
     * @param {Array.<number[]>|number[]} M1 second matrix
     * @todo find out what this does and delete it if it's not in use or
     *   not useful
     * @returns {Array.<number[]>} Something. I don't exactly know.
     */
    static matrixEliminate(M0, M1) {
        this.isSqareShortCheck(M0, true);

        let M = this.matrixAugment(M0, M1);

        for(let diag = 0; diag < M.length; diag++) {
            //if is 0 at diagonal position, swaps with different row
            if(M[diag][diag] === 0) {
                for(let row = diag+1; row < M.length; row++) {
                    if(M[row][diag] !== 0) {
                        [M[diag], M[row]] = [M[row], M[diag]];
                        break;
                    }
                }
                if(M[diag][diag] === 0) {
                    throw 'matrix not invertible';
                }
            }

            //makes sure number at diagonal position is 1 by dividing the
            //whole row by its value
            M[diag] = this.vectorDivide(
                M[diag], M[diag][diag]
            );

            //gets all other values to 0 step by step by subracting values
            //using several row operations
            for(let row = 0; row < M.length; row++) {
                if(row!==diag) {
                    M[row] = this.vectorSubtract(
                        M[row],
                        this.vectorMultiply(
                            M[diag],
                            M[row][diag]
                        ),
                        M[diag]
                    );
                }
            }
        }

        return this.matrixSlice(M, 0, M.length, M.length);
    }

    /**
     * Checks if a matrix is n*n. Only checks first row internally, so
     * make sure the matrix is well-formed.
     * @param {Array.<number[]>} M - matrix to be checked
     * @param {boolean} [throwIfNot = false] - specifies if exception
     *   should be thrown in case of M not being a sqare matrix
     * @throws {Error} 'not a sqare matrix' if `throwIfNot` is true and M
     *   is not n*n
     * @returns {boolean} False if matrix is not sqare and `throwIfNot` is
     *   false. True if it is a sqare matrix.
     */
    static isSqareShortCheck(M, throwIfNot=false) {
        if(M.length !== M[0].length) {
            if(throwIfNot) {
                throw 'not a sqare matrix';
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    /**
     * Calculates inverted matrix M⁻¹. Based on a function by Andrew
     * Ippoliti.
     * @param {Array.<number[]>} M - input matrix
     * @author Andrew Ippoliti
     * @see http://blog.acipo.com/matrix-inversion-in-javascript/
     * @throws {Error} 'not a square matrix' if number of rows and columns
     *   don't match. Only checks first row and assumes all other rows
     *   have the same length.
     * @returns {Array.<number[]>} inverted Matrix
     */
    static matrixInvert(M) {
        this.isSqareShortCheck(M, true);

        const id = this.matrixIdentity(M.length);

        return this.matrixEliminate(M, id);
    }
}
