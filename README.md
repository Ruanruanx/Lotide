# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**npm Link:**
`https://www.npmjs.com/package/@amor1006/lotide`

**Install it:**

`npm install @amor1006/lotide`

**Require it:**

`const _ = require('@amor1006/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `middle([array])`: return the middle number in an array
* `head([array])`: return the first eleemnt in an array
* `tail([array])`: return the last eleemnt in an array
* `assertArraysEqual([arr1],[arr2])`: compare if two arrays are equal
* `assertEqual(str1,str2)`: compare if two strings are equal
* `assertObjectsEqual(obj1,obj2)`: compare if two objects are equal
* `countOnly(str)`: It will return an object containing counts of everything that the input object listed.
* `map(arr, callbackFn)`: return a new array based on the results of the callback function. 
* `takeUntil(arr, callbackFn)`: return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `findKey(obj, callbackFn)`:  return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
* `countLetters(str)`: return a count of each of the letters in that sentence. 
* `letterPositions(str)`:  return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue(obj, value)`:  It should scan the object and return the first key which contains the given value. 
* `eqObjects(obj1, obj2)`: take in two objects and returns true or false, based on a perfect match.
* `without(arr, itemsToRemove) `: returns a new array without the itemsToRemove
* `flatten(arr)`: returns a new array takes out every element wrapped inside an array