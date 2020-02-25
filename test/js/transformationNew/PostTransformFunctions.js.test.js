const PostTransformFunctions = require('./../../../js/transformation/PostTransformFunctions.js').default;
let TC = require('./../../../js/transformation/./TransformationController.js').default;
const assert = require('chai').assert;
describe('js/transformation/PostTransformFunctions.js', function() {
    describe('static setParentBackground(event, element)', function() {
        it('typeof TC should be "function"', function() {
            assert.deepEqual(typeof TC,"function");
        });
    });
});
