const DegOperations = require('./../../../js/math/DegOperations.js').default;
const assert = require('chai').assert;
describe('js/math/DegOperations.js', function() {
    describe('static rad(d)', function() {
        it('DegOperations.rad(0) should be 0', function() {
            assert.equal(DegOperations.rad(0),0);
        });
        it('DegOperations.rad(90) === Math.PI/2 should be true', function() {
            assert.equal(DegOperations.rad(90) === Math.PI/2,true);
        });
        it('DegOperations.rad(180) === Math.PI should be true', function() {
            assert.equal(DegOperations.rad(180) === Math.PI,true);
        });
    });
    describe('static deg(r)', function() {
        it('DegOperations.deg(0) should be 0', function() {
            assert.equal(DegOperations.deg(0),0);
        });
        it('DegOperations.deg(Math.PI) should be 180', function() {
            assert.equal(DegOperations.deg(Math.PI),180);
        });
    });
    describe('static sinDeg(a)', function() {
        it('DegOperations.sinDeg(0) should be 0', function() {
            assert.equal(DegOperations.sinDeg(0),0);
        });
        it('DegOperations.sinDeg(90) should be 1', function() {
            assert.equal(DegOperations.sinDeg(90),1);
        });
    });
    describe('static cosDeg(a)', function() {
        it('DegOperations.cosDeg(0) should be 1', function() {
            assert.equal(DegOperations.cosDeg(0),1);
        });
        it('DegOperations.cosDeg(90) should be 0', function() {
            assert.equal(DegOperations.cosDeg(90),0);
        });
        it('DegOperations.cosDeg(180) should be -1', function() {
            assert.equal(DegOperations.cosDeg(180),-1);
        });
        it('DegOperations.cosDeg(270) should be 0', function() {
            assert.equal(DegOperations.cosDeg(270),0);
        });
    });
    describe('static tanDeg(a)', function() {
        it('DegOperations.tanDeg(0) should be 0', function() {
            assert.equal(DegOperations.tanDeg(0),0);
        });
        it('DegOperations.tanDeg(90) should be 16331239353195370', function() {
            assert.equal(DegOperations.tanDeg(90),16331239353195370);
        });
    });
    describe('static atanDeg(x)', function() {
        it('DegOperations.atanDeg(0) should be 0', function() {
            assert.equal(DegOperations.atanDeg(0),0);
        });
        it('DegOperations.atanDeg(16331239353195370) should be 90', function() {
            assert.equal(DegOperations.atanDeg(16331239353195370),90);
        });
    });
    describe('static ascent(p0, p1)', function() {
        it('DegOperations.ascent(p0, p1) === Math.PI/4 should be true', function() {
            const p0 = [0, 0],
p1 = [1, 1]
            assert.equal(DegOperations.ascent(p0, p1) === Math.PI/4,true);
        });
        it('DegOperations.ascent(p0, p1) should be 0', function() {
            const p0 = [0, 0],
p1 = [1, 0]
            assert.equal(DegOperations.ascent(p0, p1),0);
        });
    });
    describe('static ascentDeg(p0, p1)', function() {
        it('DegOperations.ascentDeg(p0, p1) should be 45', function() {
            const p0 = [0, 0],
p1 = [1, 1]
            assert.equal(DegOperations.ascentDeg(p0, p1),45);
        });
        it('DegOperations.ascentDeg(p0, p1) should be 0', function() {
            const p0 = [0, 0],
p1 = [1, 0]
            assert.equal(DegOperations.ascentDeg(p0, p1),0);
        });
    });
    describe('static simplifyRotation(val)', function() {
        it('DegOperations.simplifyRotation(0) should be 0', function() {
            assert.equal(DegOperations.simplifyRotation(0),0);
        });
        it('DegOperations.simplifyRotation(2 * Math.PI) should be 0', function() {
            assert.equal(DegOperations.simplifyRotation(2 * Math.PI),0);
        });
        it('DegOperations.simplifyRotation(10 * Math.PI + 1) should be 1', function() {
            assert.equal(DegOperations.simplifyRotation(10 * Math.PI + 1),1);
        });
    });
});
