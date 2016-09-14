'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('testing module greet', function(){
  it('should return hello Ron', function(){
    let result = greet('Ron');
    assert.ok(result === 'hello Ron', 'was not hello Ron');
  });

  it('should throw a missing a name error', function(){
    assert.throws(function(){
      greet();
    }, 'should have thrown that err');
  });
});
