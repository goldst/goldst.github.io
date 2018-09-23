const LinearAlgebra = require('./../../../js/math/LinearAlgebra.js').default;
const assert = require('chai').assert;
describe('js/math/LinearAlgebra.js', function() {
    describe('static vector(p0, p1)', function() {
        it('LinearAlgebra.vector([0, 0], [0, 0]) should be [0,0]', function() {
            assert.deepEqual(LinearAlgebra.vector([0, 0], [0, 0]),[0,0]);
        });
        it('LinearAlgebra.vector(p0, p1) should be [2,2,2,2]', function() {
            const
p0 = [0, 2, 3, 1],
p1 = [2, 4, 5, 3]
            assert.deepEqual(LinearAlgebra.vector(p0, p1),[2,2,2,2]);
        });
        it('() => linearAlgebra.vector([1, 2], [3, 4, 5]) should throw an error', function() {
            assert.throws(() => linearAlgebra.vector([1, 2], [3, 4, 5]));
        });
    });
    describe('static vectorAdd(v0, v1)', function() {
        it('LinearAlgebra.vectorAdd([0, 1], [2, 3]) should be [2,4]', function() {
            assert.deepEqual(LinearAlgebra.vectorAdd([0, 1], [2, 3]),[2,4]);
        });
        it('() => LinearAlgebra.vectorAdd([0], [1, 2, 3]) should throw an error', function() {
            assert.throws(() => LinearAlgebra.vectorAdd([0], [1, 2, 3]));
        });
    });
    describe('static vectorMultiply(v, n)', function() {
        it('LinearAlgebra.vectorMultiply([1, -2, 0], 2) should be [2,-4,0]', function() {
            assert.deepEqual(LinearAlgebra.vectorMultiply([1, -2, 0], 2),[2,-4,0]);
        });
    });
    describe('static vectorDotProduct(v0, v1)', function() {
        it('LinearAlgebra.vectorDotProduct([1, 1], [1, -1]) should be 0', function() {
            assert.equal(LinearAlgebra.vectorDotProduct([1, 1], [1, -1]),0);
        });
    });
    describe('static vectorLength(v)', function() {
        it('LinearAlgebra.vectorLength([4, 4, -4, 4]) should be 8', function() {
            assert.equal(LinearAlgebra.vectorLength([4, 4, -4, 4]),8);
        });
    });
    describe('static distance(p0, p1)', function() {
        it('LinearAlgebra.distance([0, 1, 2, 3], [4, -3, 6, 7]) should be 8', function() {
            assert.equal(LinearAlgebra.distance([0, 1, 2, 3], [4, -3, 6, 7]),8);
        });
        it('() => LinearAlgebra.distance([0, 1], [2]) should throw an error', function() {
            assert.throws(() => LinearAlgebra.distance([0, 1], [2]));
        });
    });
    describe('static innerProductAngle(v0, v1)', function() {
        it('LinearAlgebra.innerProductAngle(v0, v1) === Math.PI/2 should be true', function() {
            const v0 = [1, 0], v1 = [0, 1]
            assert.equal(LinearAlgebra.innerProductAngle(v0, v1) === Math.PI/2,true);
        });
        it('() => LinearAlgebra.innerProductAngle([0, 1], [2]) should throw an error', function() {
            assert.throws(() => LinearAlgebra.innerProductAngle([0, 1], [2]));
        });
    });
    describe('static shortestDistance(O, P0, P1)', function() {
        it('LinearAlgebra.shortestDistance([0, 0], [1, 1], [2, 1]) should be 1', function() {
            assert.equal(LinearAlgebra.shortestDistance([0, 0],
[1, 1],
[2, 1]),1);
        });
        it('() => LinearAlgebra.shortestDistance([1], [2, 3], [4]) should throw an error', function() {
            assert.throws(() => LinearAlgebra.shortestDistance([1], [2, 3], [4]));
        });
    });
});
