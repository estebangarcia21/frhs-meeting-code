# Arrays

```js
var arr = [];
console.log(arr); // []
```

## Accessing an item

```js
var arr = ['a', 'b', 'c'];

// Use square brackets [] to access an element! Array indexes always start from 0, so even though there is 3 elements, we have indexes: 0 1 2

console.log(arr[0]); // a
console.log(arr[1]); // b
console.log(arr[2]); // c
```

## Appending data to an array

```js
// Push a single value
arr.push('some value');
console.log(arr); // [ 'some value' ]

// Push multiple values
arr.push(0, 1, {}, []);
```

## Deleting at an index

```js
var arr = [5, 4, 6, 8]; 

var indexToRemove = 1; // 4

arr.splice(indexToRemove, 1);

console.log(arr); // [ 5, 6, 8 ]
```

## Find an element and delete

```js
var arr = [5, 4, 6, 8, 7, 3]; // Lets find and delete 7

var index = arr.indexOf(7); // Returns -1 if there is no value that could be found.
if (index > -1) {
  arr.splice(index, 1);
}

console.log(arr); // [ 5, 4, 6, 8, 3 ]
```

## Remove the last element of an array

`array.pop()` removes and returns the last item in an array.

```js
var arr = [1, 2, 3];

var elem = arr.pop();

console.log(elem); // 3
console.log(arr); // [ 1, 2 ]
```

## Join arrays

`array.concat(...items)` appends an array with the current array, returning a copy.

```js
var a = [1, 2, 3];
var b = [4, 5, 6];

var c = a.concat(b);

console.log(c); // [ 1, 2, 3, 4, 5, 6 ]
```

# Functions

## Definition and Invocation

```js
function camelCase() {
  console.log("Hey!");
}

camelCase(); // Hey!
```

## Parameters

```js
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(1, 2); // 3
```

## Return values

Functions can return a value.

```js
function sum(a, b) {
  return a + b;
}

var total = sum(12, 3);
console.log(total); // 15
```


## Anonymous Functions

You can set a variable to equal a function.

```js
var iter = function (i) {
  console.log(i);
}

iter('Hello world!'); // Hello world!
```

# Null and Undefined

```js
// Null means that there is no value, but it intentionally.
var usernameNull = null;

// Undefined means that there is no value, but unintentionally.
var usernameUndefined = undefined;

// When you do not initialize a variable, the default value is undefined.
var x;
console.log(x); // undefined
```

# Classes

```js
// Must be a PascalCase function if an object!
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.friends = [];
} 

// Define an instance method.
// You need to have an instance of the class to call these methods because they
// rely on the internal state of the class.
User.prototype.displayName = function () {
  console.log(this.firstName + ' ' + this.lastName);
}

User.prototype.addFriend = function (firstName) {
  this.friends.push(firstName);
}

User.prototype.displayFriends = function () {
  console.log(this.friends);
}

User.staticArr = [];

// A static method. You do not need to have an instance of the class to call this
// method. You can only use 'this' to access other static values.
User.staticFunc = function () {
  console.log(User.staticArr);
}

// Use the new keyword to create a new instance / copy of your class.
var userA = new User('John', 'Smith');
userA.displayName(); // John Smith

var userB = new User('Cool', 'Guy');
userB.displayName(); // Cool Guy

userB.addFriend('Steve');
userB.displayFriends(); // [ 'Steve' ]

User.staticFunc(); // []
```
