/* global describe, it */
const { expect } = require('chai');
const addMins = require('../utils/addMinutesToHours');

describe('Add minutes to hours', () => {
  it('Do nothing if there are no hours', () => {
    const str = 'Are you ready to go to work?';
    const retval = addMins(str);
    expect(retval).to.equal(str);
  });
  it('Do nothing to hours that already have minutes', () => {
    const str = 'Work starts at 12:20';
    const retval = addMins(str);
    expect(retval).to.equal(str);
  });
  it('Change 2pm into 2:00pm', () => {
    const str = '2pm is when the fun starts';
    const retval = addMins(str);
    expect(retval.trim()).to.equal('2:00pm is when the fun starts');
  });
  it('Change 10am to 10:00am', () => {
    const str = 'I\'m going out at 10am';
    const retval = addMins(str);
    expect(retval.trim()).to.equal('I\'m going out at 10:00am'); 
  });
});
