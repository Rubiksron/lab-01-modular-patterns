'use strict';

module.expoerts = function greet(name) {
  if(!name) throw new Error('expeceted name');
  return 'hello ' + name; 
};
