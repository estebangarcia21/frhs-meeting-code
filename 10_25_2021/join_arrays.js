var a = [1, 2, 3];
var b = [4, 5, 6];

// Join a and b
// Returns the joined array
var joined = a.concat(b);

console.log(joined);

var joined2 = a.concat(b, [0, 1, 2], [], []);
console.log(joined2);
