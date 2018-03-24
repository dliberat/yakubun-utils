function compareArrays(arr1, arr2) {
  // checks if two arrays are identical or not
  // does not perform proper deep equality checks (objects are not treated as equal);
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr2.length; i += 1) {
    if (Array.isArray(arr1[i])) { // To test values in nested arrays
      if (!compareArrays(arr1[i], arr2[i])) return false;
    } else if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

module.exports = compareArrays;
