// 1. 
// var multiArray = [];




// 2. 

// Example matrix:

// 1 2 3
// 4 5 6
// 7 8 9

// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// 3. 
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 4.
// var tableNum = prompt("Enter table number:");
// var length = prompt("Enter table length:");

// for (var i = 1; i <= length; i++) {
//   console.log(tableNum + " x " + i + " = " + (tableNum * i));
// }

// 5. 
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// 6. 
// a) Counting
// for (var i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }

// b) Reverse Counting
// for (var i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }

// c) Even Numbers
// for (var i = 0; i <= 20; i += 2) {
//   document.write(i + ", ");
// }

// d) Odd Numbers
// for (var i = 1; i < 20; i += 2) {
//   document.write(i + ", ");
// }

// e) Series (k)
// for (var i = 2; i <= 20; i += 2) {
//   document.write(i + "k, ");
// }

// 7. 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter item to search").toLowerCase();
// var found = false;

// for (var i = 0; i < A.length; i++) {
//   if (A[i] === userInput) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(userInput + " is found in the list");
// } else {
//   alert(userInput + " is not found in the list");
// }

// 8. 
// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }
// console.log("Largest number is:", largest);

// 9. 
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }
// console.log("Smallest number is:", smallest);

// 10. 
// for (var i = 5; i <= 100; i += 5) {
//   console.log(i);
// }