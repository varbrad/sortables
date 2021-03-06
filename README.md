![Sortables Logo](https://i.imgur.com/1oYI78c.png)

[![Travis (.org)](https://img.shields.io/travis/varbrad/sortables.svg?style=for-the-badge)](https://travis-ci.org/varbrad/sortables)
[![Codecov](https://img.shields.io/codecov/c/github/varbrad/sortables.svg?style=for-the-badge)](https://codecov.io/gh/varbrad/sortables)

[![David](https://img.shields.io/david/varbrad/sortables.svg?style=for-the-badge)](https://david-dm.org/varbrad/sortables)
[![GitHub](https://img.shields.io/github/license/varbrad/sortables.svg?style=for-the-badge)](https://github.com/varbrad/sortables/blob/master/LICENSE)

[![npm](https://img.shields.io/npm/v/sortables.svg?style=for-the-badge)](https://www.npmjs.com/package/sortables?activeTab=versions)
[![npm](https://img.shields.io/npm/dt/sortables.svg?style=for-the-badge)](https://www.npmjs.com/package/sortables)

A set of utility functions for sorting arrays.

# Install

Install using `npm` or `yarn`.

```
npm i sortables --save
yarn add sortables
```

The library exports all of it's functions as named exports.

**ES6**

```javascript
import { sort, ascending } from 'sortables';
const result = sort([2, 4, 1, 3], ascending);
console.log(result); // [1, 2, 3, 4]
```

**CJS**

```javascript
const { sort, descending } = require('sortables');
const result = sort([2, 4, 1, 3], descending);
console.log(result); // [4, 3, 2, 1]
```

**Web via CDN**

```html
<script src="https://unpkg.com/sortables"></script>
```

```javascript
const result = sortables.sort([2, 4, 1, 4], sortables.ascending);
console.log(result); // [1, 2, 3, 4]
```

## `sort(array, sortFunction)`

Returns a new array with the sort function having been applied.

Does not modify the original array (unlike the vanilla JS Array.sort function).

```javascript
const data = [4, 1, 6, 2, 4];
const sorted = sort(data, ascending);

console.log(sorted); // [1, 2, 4, 4, 6]
console.log(data === sorted); // false
```

## `hierarchical(...sortFunctions)`

Combines multiple sort functions into one hierarchical sort function.

```javascript
const data = [
  { data: 4, active: true },
  { data: 2, active: true },
  { data: 4, active: false },
  { data: 6, active: false },
];
const sorted = sort(data, hierarchical(ascending('data'), descending('active')));

console.log(sorted);
/*
  [
    { data: 2, active: true },
    { data: 4, active: true },
    { data: 4, active: false },
    { data: 6, active: false }
  ]
*/
```

## `ascending(key)` & `descending(key)`

Two default sorting functions, with an optional key (for sorting on object properties).

`ascending` will sort from low-to-high, whereas `descending` will sort from high-to-low.

```javascript
console.log(sort([4, 5, 2, 6, 3, 1], ascending)) // [1, 2, 3, 4, 5, 6]
console.log(sort([4, 5, 2, 6, 3, 1], descending)) // [6, 5, 4, 3, 2, 1]
```

Both functions can be given a key to sort based on properties of an object.

```javascript
const data = [ { a: 1 }, { a: 4 }, { a: 2 }, { a: 3 } ]

console.log(sort(data, ascending('a'))) // [ { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 } ]
console.log(sort(data, descending('a'))) // [ { a: 4 }, { a: 3 }, { a: 2 }, { a: 1 } ]
```

_Note: `ascending` and `ascending()` are identical._
