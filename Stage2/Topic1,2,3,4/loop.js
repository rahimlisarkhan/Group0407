// var numbers = [1, 2, 3, 4, 5];

// for - 3
// in
// of
// while
// do

// for (var a = 0; a <= 20; a = a + 3) {
// for (var a = 100; a >= -100; a = a - 10) {
// for (var a = 0; a <= 100; a = a + 2) {

// var evenNumbers = [];

// for (var a = 0; a <= 100; a++) {
//   if (a % 5 == 0 && a % 3 == 0) {
//     // console.log('a', a);
//     evenNumbers.push(a);
//   }
// }

// console.log('evenNumbers', evenNumbers);

// var students = [
//   'Ayxan',
//   'Xeyal',
//   'Aida',
//   'Ali',
//   'aysel',
//   'Zahir',
//   'Ilmar',
//   'Shole',
// ];

// // EDGE CASE - bas verecek xetalarida yoxla

// var list = [];

// for (var i = 0; i < students.length; i++) {
//   var el = students[i];

//   var elLittle = el.toLowerCase(); // Boyuk herfli adi goturub balaca edib menimsetdi. amma referans adresine toxunmadi

//   //   if (el.toLowerCase().startsWith('a')) {
//   if (elLittle[0] == 'a') {
//     list.push(el);
//   }
// }

// console.log('list', list);

var numbers = [1, 2, 3, 4, 5];

// for (var i = 0; i < numbers.length; i++) {
//   var el = numbers[i];

//   if (el == 3) {
//     console.log(el);
//     // break;
//     continue;
//   }

//   console.log('islenen', el);
// }

// for (var el of numbers) {
//   console.log(el);
// }

// for (var i in numbers) {
//   console.log(numbers[i]);
// }

// var i = 0;

// while (i < numbers.length) {
//   console.log(numbers[i]);

//   i++;
// }

// do {
//   console.log(numbers[i]);
//   i++;
// } while (i < numbers.length);

// var students1 = [
//   'Ayxan',
//   'Xeyal',
//   'Aida',
//   'Ali',
//   'aysel',
//   'Zahir',
//   'Ilmar',
//   'Shole',
// ];

// var students2 = [];

// while (students1.length > students2.length) {
//   var silinenEl = students1.pop();
//   students2.push(silinenEl);
// }

// console.log(students1);
// console.log(students2);

//EXC.1
// INPUT: "Əşrəf-Əli-Əfqan-Əfsanə"
// OUTPUT: "Aşraf, Ali, Afqan, Afsana"

var input = 'Əşrəf-Əli-Əfqan-Əfsanə';

var newStr = input.toLowerCase().replaceAll('ə', 'a');

var list = newStr.split('-');
var output = ''; //2

for (var el of list) {
  var newEl = el;

  var firstLetter = newEl[0].toUpperCase(); //5
  var otherLetters = newEl.slice(1, newEl.length); //6

  var studentName = firstLetter + otherLetters; //7

  output += studentName + ', ';
}

console.log(output);

// SOLUTION 1
// var list = input.split('-'); // 1 ["Əşrəf", "Əli", "Əfqan", "Əfsanə"]

// var list2 = []; //2

// //3
// for (var el of list) {
//   var newEl = el.toLowerCase().replaceAll('ə', 'a'); //4

//   var firstLetter = newEl[0].toUpperCase(); //5
//   var otherLetters = newEl.slice(1, newEl.length); //6

//   var studentName = firstLetter + otherLetters; //7

//   list2.push(studentName);
// }

// var output = list2.join(', ');

// console.log(output);
