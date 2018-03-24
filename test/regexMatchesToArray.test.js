/* global describe, it */
const { expect } = require('chai');
const toArray = require('../utils/regexMatchesToArray');

const str = 'I like bananas. Do you like bananas?';

describe('Return all regex matches in an array', () => {
  it('Return empty array if no matches', () => {
    const re = new RegExp('apple', 'gi');
    const arr = toArray(str, re);
    /* eslint-disable-next-line no-unused-expressions */
    expect(arr).to.be.empty;
  });
  it('Return two instances of bananas', () => {
    const re = new RegExp('bananas', 'gi');
    const arr = toArray(str, re);
    expect(arr.length).to.equal(2);
  });
  it('Add items to an accumulator array', () => {
    const acc = ['I', 'have', 'a', 'lovely'];
    const re = new RegExp('like', 'gi');
    const arr = toArray(str, re, acc);
    expect(arr.length).to.equal(6);
    expect(arr).to.include('I', 'have', 'a', 'lovely', 'like');
  });
});
