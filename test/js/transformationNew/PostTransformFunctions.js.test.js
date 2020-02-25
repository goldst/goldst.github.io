const PostTransformFunctions = require('./../../../js/transformationNew/PostTransformFunctions.js').default;
let TC = require('./../../../js/transformationNew/./TransformationController.js').default;
const assert = require('chai').assert;
describe('js/transformationNew/PostTransformFunctions.js', function() {
    describe('static setParentBackground(event, element)', function() {
        it('typeof TC should be "function"', function() {
            assert.deepEqual(typeof TC,"function");
        });
    });
});
