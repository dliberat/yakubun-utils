const expect = require('chai').expect;
const toArray = require('../utils/regexMatchesToArray.js');

const str = "I like bananas. Do you like bananas?";

describe('Return all regex matches in an array', function() {
  it('Return empty array if no matches', function() {
    const re = new RegExp('apple', 'gi');
    const arr = toArray(str, re);
    expect(arr).to.be.empty;
  });
  it('Return two instances of bananas', function() {
    const re = new RegExp('bananas', 'gi');
    const arr = toArray(str, re);
    expect(arr.length).to.equal(2);
  });
  it('Add items to an accumulator array', function() {
    const acc = ['I','have','a','lovely'];
    const re = new RegExp('like', 'gi');
    const arr = toArray(str, re, acc);
    expect(arr.length).to.equal(6);
    expect(arr).to.include('I','have','a','lovely','like');
  });
});