const UnitConversion = require('./../../../js/math/UnitConversion.js').default;
const assert = require('chai').assert;
describe('js/math/UnitConversion.js', function() {
    describe('static cmToPx(cm)', function() {
        it('UnitConversion.cmToPx(0) should be 0', function() {
            assert.equal(UnitConversion.cmToPx(0),0);
        });
        it('UnitConversion.cmToPx(2.54/96) should be 1', function() {
            assert.equal(UnitConversion.cmToPx(2.54/96),1);
        });
    });
    describe('static mmToPx(mm)', function() {
        it('UnitConversion.mmToPx(0) should be 0', function() {
            assert.equal(UnitConversion.mmToPx(0),0);
        });
        it('UnitConversion.mmToPx(25.4/96) should be 1', function() {
            assert.equal(UnitConversion.mmToPx(25.4/96),1);
        });
    });
    describe('static qToPx(Q)', function() {
        it('UnitConversion.qToPx(0) should be 0', function() {
            assert.equal(UnitConversion.qToPx(0),0);
        });
        it('UnitConversion.qToPx(101.6/96) should be 1', function() {
            assert.equal(UnitConversion.qToPx(101.6/96),1);
        });
    });
    describe('static inToPx(inches)', function() {
        it('UnitConversion.inToPx(0) should be 0', function() {
            assert.equal(UnitConversion.inToPx(0),0);
        });
        it('UnitConversion.inToPx(1/96) should be 1', function() {
            assert.equal(UnitConversion.inToPx(1/96),1);
        });
    });
    describe('static pcToPx(pc)', function() {
        it('UnitConversion.pcToPx(0) should be 0', function() {
            assert.equal(UnitConversion.pcToPx(0),0);
        });
        it('UnitConversion.pcToPx(6/96) should be 1', function() {
            assert.equal(UnitConversion.pcToPx(6/96),1);
        });
    });
    describe('static ptToPx(pt)', function() {
        it('UnitConversion.ptToPx(0) should be 0', function() {
            assert.equal(UnitConversion.ptToPx(0),0);
        });
        it('UnitConversion.ptToPx(72/96) should be 1', function() {
            assert.equal(UnitConversion.ptToPx(72/96),1);
        });
    });
    describe('static toPx(val, unit)', function() {
        it('UnitConversion.toPx(72/96, \'pt\') should be 1', function() {
            assert.equal(UnitConversion.toPx(72/96, 'pt'),1);
        });
        it('() => UnitConversion.toPx(0.00000001, \'light-years\') should throw an error', function() {
            assert.throws(() => UnitConversion.toPx(0.00000001, 'light-years'));
        });
    });
    describe('static stringToPx(val)', function() {
        it('UnitConversion.stringToPx(\'0pt\') should be 0', function() {
            assert.equal(UnitConversion.stringToPx('0pt'),0);
        });
        it('() => UnitConversion.stringToPx(\'ABC0.01DEF\') should throw an error', function() {
            assert.throws(() => UnitConversion.stringToPx('ABC0.01DEF'));
        });
    });
});
