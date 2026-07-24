// Arrow Function syntax (easy)

// const age = 15;

// const answer2 = age > 15 ? 'Yes' : 'No';

// let answer;

// if (age > 15) {
//   answer = 'Yes';
// } else {
//   answer = 'No';
// }

const numbers = [1, 2, 3, 4];

const newList = numbers.map(function (el) {
  return el * 2;
});

// const newList2 = numbers.map((el) => {
//   return el * 2;
// });

// const newList2 = numbers.map((el) => el * 2);
// const newList2 = numbers.map((el) => el * 2);
const newList2 = numbers.map((el) => el * 2);

console.log('newList', newList);
console.log('newList2', newList2);

function A() {}

// #1
// var A = function () {};
// const A = () => {};

// // #2
// var A = function (a, b) {
//   let x = 12 + a + b;

//   return x + 14;
// };

// const A = (a, b) => {
//   let x = 12 + a + b;

//   return x + 14;
// };

// #3
// function A(a, b) {
//   return a + b;
// }

// const A = (a, b) => {
//   return a + b;
// };

// const A = (a, b) => a + b;
const A = (a) => a + 12;
// const A = (a, b) =>{ a + b }; // WRONG!!

const sum = A(100); // 112
