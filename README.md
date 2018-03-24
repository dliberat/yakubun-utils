# Yakubun-utils
[![Build Status](https://travis-ci.org/garroadran/yakubun-utils.svg?branch=master)](https://travis-ci.org/garroadran/yakubun-utils)
[![Coverage Status](https://coveralls.io/repos/github/garroadran/yakubun-utils/badge.svg?branch=master)](https://coveralls.io/github/garroadran/yakubun-utils?branch=master)

## Overview

This package contains utility functions for use in conjunction with the Yakubun translation-checking library. These utility methods can be used to help create custom translation checks.

## Getting started

Install the package via npm.

`npm install yakubun-utils`

Import the library and access the methods that you need.

```
import * as util from 'yakubun-utils';

const areSame = util.compareArrays(['a','b','c'], ['d','e','f']);
console.log(areSame); // false
```

## Featured functions

1. CheckResult

A default object constructor to be returned by check functions.

**Example use**
```
   let retval = null;

   function myImportantCheck(source, target, options, accumulator) {
     // Run check

     if (hasError) {
       retval = new util.CheckResult('my-important-check');
       retval.hasError = true;
       retval.description = 'See the style guide pg. 10 for more info.';
       retval.HTML = '<span class="warn">Found an error</span>';
       retval.plainText = 'Found an error.';
     }
     
     return [retval, accumulator];
   }
```

2. compareArrays

Performs a deep check of two arrays to check if all of their contents are equivalent. Only tested for primitive types.

3. regexMatchesToArray

Given a string and a regular expression to execute, this function gathers up all of the matches to that regular expression into an array. You can also pass in an array as the final argument and the function will add the matches to the end of your array instead of creating a new one.

4. regexComparer

Takes two strings and a regular expression for each string, then runs `regexMatchesToArray` on both. It returns an array that contains all the matches as well as the result of `compareArrays`.

```
  const [sourceMatches, targetMatches, areEqual] = util.regexComparer(source, target, sourceRegex, targetRegex);
```

5. replaceAllFromArray

Takes an array of arrays which indicate a series of replacements to execute on a given string.

**Example use**
```
   const replacers = [
     ['January', 'Jan'],
     ['February', 'Feb']
   ];

   const text = 'Please have the January 20 report ready by February 1.';

   const replaced = util.replaceAllFromArray(replacers, text);

   console.log(replaced); // 'Please have the Jan 20 report ready by Feb 1'
```

## Contributing

Bug reports and feature requests can be posted on the GitHub issues page. If you wish to contribute to the library itself, follow these steps:

1. Fork the repository to your GitHub account
2. Clone your fork of the repo to your workstation
3. Install all necessary dependencies using `npm install`
4. Create a branch for your work (`git branch -b mybranch`)
5. Do work!
6. Fix all linter errors.
7. Run all tests and verify that they pass.
8. Commit your changes and push to your forked repo
9. Submit a pull request to the main repo