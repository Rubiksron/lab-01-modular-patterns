'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');


describe('testing greet module', function(){
  it('should return Ron', function(){
    var result = greet('Ron');
    assert.equal(result, 'hello Ron', 'expected "hello Ron"');
  });
});
