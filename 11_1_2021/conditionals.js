/**
 * Display that you can buy a drink if you are 18 or older and you have more than 25 dollars.
 */

var age = 15;
var money = 70;

// AND expression 
// & - ampersand. Type using Shift + 7

// if (age >= 18 && money > 25) {
//   console.log("You can buy a drink!");
// }

// You can buy a drink if your age is 18 or higher or your money is 50 or higher.
// | - pipes

if (age >= 18 || money >= 50) {
  console.log("You can buy a drink!");
}
