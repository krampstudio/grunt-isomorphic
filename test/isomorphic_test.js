'use strict';

var grunt = require('grunt');

exports.isomorphic = {
  'default': function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default/hypster.old.js');
    var expected = grunt.file.read('test/expected/default/hypster.old.js');
    test.equal(actual, expected, 'the old hypster is generated');

    test.done();
  },
};
