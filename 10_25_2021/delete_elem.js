var arr = ['A', 'B', 'C'];

// If value exists in the array, it will return the index of that value in the array.
// If it does not exist, it will return -1
var index = arr.indexOf('B');

if (index > -1) {
  arr.splice(index, 1); // Removes the value.
  console.log(arr);
}
