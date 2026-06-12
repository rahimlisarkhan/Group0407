// JavaScript Arithmetic Operators =======
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement
// ( )	Group

// var x = 2;
// var y = 10;

// JavaScript Assignment Operators =======
// y = y - 2;
// y -= 2;
// y += 2;
// y *= 2;

// var z = x;
// var z = 4;

// z = z + y;
// z = z - y;

// console.log(z); // 14

// var result = x + y; // 12
// var result = y - x; // 2
// var result = y * x; // 20
// var result = y / x; // 5
// var result = y ** x; // 100
// var result = y % x; // 0
// var result = y + x * 2; // 14
// var result = (y + x) * 2; // 24

// y++;
// y--;

// y = y + 1;
// y = y - 1; // 9
// y = y * 1;

// console.log(y);

// JavaScript Comparison

// ==
// ===
// !=
// !==
// >
// <
// <=
// >=

// var a = 10;
// var b = 10;

// var result = a == b;
// var result = a === b;
// var result = a < b;
// var result = a > b;
// var result = a >= b;
// var result = a <= b;

// Logical Assignment Operators
// var age = 17;
// var citizen = 'az';
// var weight = 75;

// var result = age >= 18 && citizen == 'az' && weight <= 75; // true, false
// // var result = citizen == 'az' || weight <= 75;

// // console.log(result);

// // if
// // else if
// // else

// if (result) {
//   console.log('Salam xos gelmisen!');
// } else {
//   console.log('Tesufki komandaya qosula bilmezsiz.');
// }

// var age = 18;
// var citizen = 'az';
// var weight = 81;

// if (age >= 18) {
//   console.log('Intro');
// }

// if (weight > 80) {
//   console.log('Artiq ceki');
// }

// console.log('Program isledi');
// console.log('Program isledi');
// console.log('Program isledi');
// console.log('Program isledi');
// console.log('Program isledi');
// console.log('Program isledi');
// console.log('Program isledi');
// console.log('Program isledi');

// var studentPoint = 45;
var studentPoint = prompt('Enter your score');

// // A | 90 - 100
// // B | 70 - 89
// // C | 50 - 69
// // F | 0 - 49
// // ELSE - Xeta mesaji | Error | Edge case

if (studentPoint >= 90 && studentPoint <= 100) {
  alert('Your point is: A');
} else if (studentPoint >= 70 && studentPoint <= 89) {
  alert('Your point is: B');
} else if (studentPoint >= 50 && studentPoint <= 69) {
  alert('Your point is: C');
} else if (studentPoint >= 0 && studentPoint <= 49) {
  alert('Your point is: F');
} else {
  alert('Please enter correct prompt');
}

// var a = prompt('Imtahandaki qiymet?');
// var a = confirm('Imtahana daxil olmaq isteyirsiniz?');

// console.log('Telebenin cavabi:', a);

// alert('Qalibsiz!');
