const expect = require('chai').expect;
const compareArrays = require('../utils/compareArrays.js');

describe('Test', function(){
  it('Verify whether two arrays are identical', function(){
    const a = compareArrays([1, 2, 3], [1, 2, 3]);
    expect(a).to.equal(true);

    const b = compareArrays([1, 2, 3], [1, 2, [3, 4]]);
    expect(b).to.equal(false);

    const c = compareArrays([1, 2, [3, 4, [5, 6]]], [1, 2, [3, 4, [5, 6]]]);
    expect(c).to.equal(true);

    const d = compareArrays([null, null, 2], [null, null, 2]);
    expect(d).to.equal(true);
  });
});