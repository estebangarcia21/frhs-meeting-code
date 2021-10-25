# Functional Programming Part One

## Arrays

Arrays have three core functions. 

### forEach

For each iterates through each element of the array. You pass a function that takes in the element as the first parameter and the index of that element as the second parameters.

You do not need to specify all the parameters in the function that you pass if you don't use them. For example, if I only need to know the element and not the index, I can just do...

```js
arr.forEach(function (elem) ...)
```

Instead of...

```js
arr.forEach(function (elem, i) ...)
```

Here is an example of `forEach`

```js
var arr = [1, 2, 3];

arr.forEach(function (elem, i) {
  console.log(elem + ' ' + i);
});

// Output:
// 1 0
// 2 1
// 3 2
```

### map

Map applies a transformation to each element in the array and returns a new array with all the transformed values. For example, I might want to add 5 to each element in the array.

```js
var arr = [1, 2, 3, 4, 5];

var mapped = arr.map(function (elem) {
  return elem + 5;
});

console.log(mapped); // [ 6, 7, 8, 9, 10 ]
```

### filter

Filter removes items from an array based on a **_predicate_**. A predicate refers to a function that returns true or false based on a value.

If the function returns false, the element will be removed from the array.

Filter returns a new array filtered array.

```js
var arr = [1, 2, 3, 4, 5];

var filtered = arr.filter(function (elem) {
  return elem != 5;
});

console.log(filtered); // [ 1, 2, 3, 4 ]
```

### reduce

Reduce combines each element of an array into one single value. You specifiy how the elements will be combined by passing in a function.

- First parameter - The previous value in the array
- Second parameter - The current value in the array
- Third parameter - Current index

```js
var arr = [1, 2, 3, 4, 5];

var reduced = arr.reduce(function (pv, cv) {
  return pv + cv;
});

console.log(reduced); // 15
```
