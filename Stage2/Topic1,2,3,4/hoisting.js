// var let const

// var a = 5;

// a = 10;

// const a = 14;

// a = 12; //

// console.log(a);

// let a = 15;

// a = 20;

// console.log(a);

// const numbers = [1, 2, 34, 5, 6];

// numbers.push(100);

// console.log(numbers);

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
// }

// console.log(index);

// if (true) {
//   let a = 5;
// }

// console.log(a);

// ===== FN hoisting
//Cannot access 'A' before initialization
// A();

// function A() {
//   console.log('Working...');
// }

// var A = function () {
//   console.log('Working...');
// };

// let A = function () {
//   console.log('Working...');
// };

// ===== variable hoisting

// a = 5;

// console.log(a);

// var a;

// a = 5;

// console.log(a);

// let a;

// function A() {
//   a = 5;

//   console.log(a);

//   let a;
// }

// A();

//  Temporal Dead Zone
// x = 23; // Gives reference error

// let x;
