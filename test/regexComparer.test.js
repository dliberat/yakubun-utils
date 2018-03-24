/* global describe, it */
const { expect } = require('chai');
const compare = require('../utils/regexComparer');

describe('Regex comparer', () => {
  it('Find regex matches in two strings', () => {
    const src = 'There are 20 cats.';
    const tgt = 'Hay 30 gatos.';
    const re = /\d+/g;
    const [sourceMatch, targetMatch, areEqual] = compare(src, tgt, re, re, false);
    /* eslint-disable-next-line no-unused-expressions */
    expect(areEqual).to.be.false;
    expect(sourceMatch).to.include('20');
    expect(targetMatch).to.include('30');
  });
});
