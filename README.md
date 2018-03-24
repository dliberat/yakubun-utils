# Yakubun-utils

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

**Coming soon**

1. CheckResult
2. compareArrays
3. regexMatchesToArray

## Contributing

Bug reports and feature requests can be posted on the GitHub issues page. If you wish to contribute to the library itself, follow these steps:

1. Fork the repository to your GitHub account
2. Clone your fork of the repo to your workstation
3. Install all necessary dependencies using `npm install`
4. Create a branch for your work (`git branch -b mybranch`)
5. Do work!
6. Commit your changes and push to your forked repo
7. Submit a pull request to the main repo