const compareArrays = require('./compareArrays');
const matchToArray = require('./regexMatchesToArray');

/**
 * Applies two  different regular expressions to two different
 * strings and returns the matches for both, as well as a boolean
 * indicating whether the matches are identical or not.
 * @param {string} source - Source text
 * @param {string} target - Target text
 * @param {RegExp} sourceRegex - Regex to apply to source
 * @param {RegExp} targetRegex - Regex to apply to target
 * @param {bool} groupsExist - Whether or not to expect capturing groups
 */
function regexComparer(
  source,
  target,
  sourceRegex,
  targetRegex,
  groupsExist,
) {
  /* if we are looking for a captured group, then we need to set this to 1
  otherwise, we simply return the first match (which is the whole match) */
  const capturingGroups = groupsExist ? 1 : 0;

  /* Perform the RegExp.exec to get the matches
  .map discards all the metadata and only leaves the matches
  .sort puts the arrays in order so they can be compared */
  const sourceMatches = matchToArray(source, sourceRegex)
    .map(x => x[capturingGroups]).sort();
  const targetMatches = matchToArray(target, targetRegex)
    .map(x => x[capturingGroups]).sort();

  const areEqual = compareArrays(sourceMatches, targetMatches);
  return [sourceMatches, targetMatches, areEqual];
}

module.exports = regexComparer;
