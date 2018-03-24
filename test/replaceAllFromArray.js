/* global describe, it */
const { expect } = require('chai');
const replaceAll = require('../utils/replaceAllFromArray');

const arr = [
  ['apple', 'banana'],
  ['dog', 'cat'],
];

describe('Replace all from arrays', () => {
  it('Replace apple with banana and dog with cat', () => {
    const str = 'My dog likes to eat apples.';
    const retval = replaceAll(arr, str);
    expect(retval).to.equal('My cat likes to eat bananas.');
  });
  it('Return original string if an invalid argument was passed', () => {
    const str = 'Original string';
    const a = replaceAll(undefined, str);
    expect(a).to.equal(str);

    const b = replaceAll(null, str);
    expect(b).to.equal(str);

    const c = replaceAll(str, str);
    expect(c).to.equal(str);

    const d = replaceAll({ name: 'Bob', age: '21' }, str);
    expect(d).to.equal(str);
  });
  it('Handle wildcards', () => {
    const arr2 = [
      ['m.m', 'mother'],
    ];
    const retval = replaceAll(arr2, 'Do you like your mom? Yes I like my mum.');
    expect(retval).to.equal('Do you like your mother? Yes I like my mother.');
  });
  it('Handle lookaheads', () => {
    const arr2 = [
      ['dog(?= kennel)', 'cat'],
    ];
    const retval = replaceAll(arr2, 'Not a dog kennel! A kennel!');
    expect(retval).to.equal('Not a cat kennel! A kennel!');
  });
  it('Accept regex flags as parameters', () => {
    const str = 'apple apple apple';
    const retval = replaceAll(arr, str, 'i');
    expect(retval).to.equal('banana apple apple');
  });
});
