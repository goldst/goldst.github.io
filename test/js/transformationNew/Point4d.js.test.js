const Point4d = require('./../../../js/transformation/Point4d.js').default;
const assert = require('chai').assert;
describe('js/transformation/Point4d.js', function() {
    describe('get X()', function() {
        it('new Point4d(1, 2, 3, 4).X should be 0.25', function() {
            assert.equal(new Point4d(1, 2, 3, 4).X,0.25);
        });
    });
    describe('get Y()', function() {
        it('new Point4d(1, 2, 3, 4).Y should be 0.5', function() {
            assert.equal(new Point4d(1, 2, 3, 4).Y,0.5);
        });
    });
    describe('get Z()', function() {
        it('new Point4d(1, 2, 3, 4).Z should be 0.75', function() {
            assert.equal(new Point4d(1, 2, 3, 4).Z,0.75);
        });
    });
    describe('get XY()', function() {
        it('new Point4d(1, 2, 3, 4).XY should be [0.25,0.5]', function() {
            assert.deepEqual(new Point4d(1, 2, 3, 4).XY,[0.25,0.5]);
        });
    });
    describe('get XYZ()', function() {
        it('new Point4d(1, 2, 3, 4).XYZ should be [0.25,0.5,0.75]', function() {
            assert.deepEqual(new Point4d(1, 2, 3, 4).XYZ,[0.25,0.5,0.75]);
        });
    });
    describe('matrix(M)', function() {
        it('new Point4d(1, 2).matrix(M).XY should be [2,2]', function() {
            const M = [
[0, 1, 0],
[0, 1, 0],
[0, 0, 1]
]
            assert.deepEqual(new Point4d(1, 2).matrix(M).XY,[2,2]);
        });
    });
    describe('matrix3d(M)', function() {
        it('new Point4d(1, 2, 3).matrix3d(M).XYZ should be [2,3,3]', function() {
            const M = [
[0, 1, 0, 0],
[0, 0, 1, 0],
[0, 0, 1, 0],
[0, 0, 0, 1]
]
            assert.deepEqual(new Point4d(1, 2, 3).matrix3d(M).XYZ,[2,3,3]);
        });
    });
    describe('perspective(d)', function() {
        it('new Point4d(2, 2, 2, 2).perspective(2).t should be 1', function() {
            assert.equal(new Point4d(2, 2, 2, 2).perspective(2).t,1);
        });
        it('new Point4d(2, 2).perspective(-2).t should be 1', function() {
            assert.equal(new Point4d(2, 2).perspective(-2).t,1);
        });
    });
    describe('rotate(a)', function() {
        it('new Point4d(1, 0).rotate(90).XY should be [0,1]', function() {
            assert.deepEqual(new Point4d(1, 0).rotate(90).XY,[0,1]);
        });
    });
    describe('rotate3d(x, y, z, a)', function() {
        it('new Point4d(-1, -1, 0).rotate3d(0, 1, 0, 90).XYZ should be [0,-1,-1]', function() {
            assert.deepEqual(new Point4d(-1, -1, 0).rotate3d(0, 1, 0, 90).XYZ,[0,-1,-1]);
        });
    });
    describe('rotateX(a)', function() {
        it('new Point4d(0, -1).rotateX(180).XY should be [0,1]', function() {
            assert.deepEqual(new Point4d(0, -1).rotateX(180).XY,[0,1]);
        });
    });
    describe('rotateY(a)', function() {
        it('new Point4d(-1, 0).rotateY(180).XY should be [1,0]', function() {
            assert.deepEqual(new Point4d(-1, 0).rotateY(180).XY,[1,0]);
        });
    });
    describe('rotateZ(a)', function() {
        it('new Point4d(1, 0).rotate(90).XY should be [0,1]', function() {
            assert.deepEqual(new Point4d(1, 0).rotate(90).XY,[0,1]);
        });
    });
    describe('scale(x, y=x)', function() {
        it('new Point4d(1, 2).scale(3, 4).XY should be [3,8]', function() {
            assert.deepEqual(new Point4d(1, 2).scale(3, 4).XY,[3,8]);
        });
        it('new Point4d(1, 2).scale(3).XY should be [3,6]', function() {
            assert.deepEqual(new Point4d(1, 2).scale(3).XY,[3,6]);
        });
    });
    describe('scale3d(x, y, z)', function() {
        it('new Point4d(1, 2, 3).scale3d(6, 5, 4).XYZ should be [6,10,12]', function() {
            assert.deepEqual(new Point4d(1, 2, 3).scale3d(6, 5, 4).XYZ,[6,10,12]);
        });
    });
    describe('scaleX(s)', function() {
        it('new Point4d(1, 2).scaleX(3).XY should be [3,2]', function() {
            assert.deepEqual(new Point4d(1, 2).scaleX(3).XY,[3,2]);
        });
    });
    describe('scaleY(s)', function() {
        it('new Point4d(1, 2).scaleY(3).XY should be [1,6]', function() {
            assert.deepEqual(new Point4d(1, 2).scaleY(3).XY,[1,6]);
        });
    });
    describe('scaleZ(s)', function() {
        it('new Point4d(1, 2, 3).scaleZ(3).XYZ should be [1,2,9]', function() {
            assert.deepEqual(new Point4d(1, 2, 3).scaleZ(3).XYZ,[1,2,9]);
        });
    });
    describe('skew(x, y=0)', function() {
        it('new Point4d(1, 2).skew(45).XY should be [3,2]', function() {
            assert.deepEqual(new Point4d(1, 2).skew(45).XY,[3,2]);
        });
        it('new Point4d(1, 2).skew(45, -45).XY should be [3,1]', function() {
            assert.deepEqual(new Point4d(1, 2).skew(45, -45).XY,[3,1]);
        });
    });
    describe('skewX(a)', function() {
        it('new Point4d(1, 2).skewX(45).X should be 3', function() {
            assert.equal(new Point4d(1, 2).skewX(45).X,3);
        });
    });
    describe('skewY(a)', function() {
        it('new Point4d(1, 2).skewY(45).XY should be [1,3]', function() {
            assert.deepEqual(new Point4d(1, 2).skewY(45).XY,[1,3]);
        });
    });
    describe('translate(x, y=0)', function() {
        it('new Point4d(1, 2).translate(-2).XY should be [-1,2]', function() {
            assert.deepEqual(new Point4d(1, 2).translate(-2).XY,[-1,2]);
        });
        it('new Point4d(1, 2).translate(-2, 3).XY should be [-1,5]', function() {
            assert.deepEqual(new Point4d(1, 2).translate(-2, 3).XY,[-1,5]);
        });
    });
    describe('translate3d(x, y, z)', function() {
        it('new Point4d(1, 2, 3).translate3d(-3, -2, -1).XYZ should be [-2,0,2]', function() {
            assert.deepEqual(new Point4d(1, 2, 3).translate3d(-3, -2, -1).XYZ,[-2,0,2]);
        });
    });
    describe('translateX(t)', function() {
        it('new Point4d(1, 2).translateX(-2).X should be -1', function() {
            assert.equal(new Point4d(1, 2).translateX(-2).X,-1);
        });
    });
    describe('translateY(t)', function() {
        it('new Point4d(1, 2).translateY(-2).XY should be [1,0]', function() {
            assert.deepEqual(new Point4d(1, 2).translateY(-2).XY,[1,0]);
        });
    });
    describe('translateZ(t)', function() {
        it('new Point4d(1, 2, 3).translateZ(-2).XYZ should be [1,2,1]', function() {
            assert.deepEqual(new Point4d(1, 2, 3).translateZ(-2).XYZ,[1,2,1]);
        });
    });
});
