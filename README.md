# dsacb
DSA with Callback/Predicate/Comparator.

## Introduction

Data Structures and Algorithms with Callback/Predicate/Comaprator(DSACB) is a utility which implements DSAs with callback/predicate/comparator. eg.
```javascript
const dsacb = require('dsacb');
const result = dsacb.binarySearch([1,2,3,4,5,6,7], 5, (mid, key)=> mid - key);
console.log(result); // 4
```

## Installtion
```
npm install --save dsacb
```

## Setup
To add it to your project just  `require` it in your project.
```javascript
const dsacb = require('dsacb');
// TODO: Do your fancy things with `dsacb` here.
```