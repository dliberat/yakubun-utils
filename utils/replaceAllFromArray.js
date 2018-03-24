let string;
let parameters = 'gi';

/**
 * Iterates over an array and applies all the replacements indicated
 * in the constituent arrays.
 * @param {*[]} formatChangesArr - Array of substrings to replace
 * @param {string} str - The string to modify
 * @param {string} params - RegExp flags. Defaults to 'gi'.
 */
function replaceAllFromArray(formatChangesArr, str, params) {
  string = str;
  if (typeof params === 'string') parameters = params

  if (formatChangesArr === undefined ||
    formatChangesArr === null ||
    formatChangesArr.constructor !== Array) {
    console.error('Error. formatChangesArr is not an Array.');
    return string;
  }

  formatChangesArr.forEach((e) => {
    const re = new RegExp(e[0], parameters);
    string = string.replace(re, e[1]);
  });

  return string;
}

module.exports = replaceAllFromArray;
