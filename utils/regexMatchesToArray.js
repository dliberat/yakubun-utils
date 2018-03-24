/** Returns an array of all the matches to the given regex.
 * If passed an initial array, it returns it with the new
 * matches tacked on at the end
 * NOTE: This function currently appears to fail with literal
 * regex constructors.
 * @param {string} str - The string to search
 * @param {RegExp} regex - The regular expression to execute
 * @param {array} accumulatorArr - Adds the matches to the array provided
 * @returns An array of matches found.
 */
function regexMatchesToArray(str, regex, accumulatorArr = []) {
  let m;

  do {
    m = regex.exec(str);
    if (m) { accumulatorArr.push(m); }
  } while (m);
  return accumulatorArr;
}

module.exports = regexMatchesToArray;
