// map, forEach, sort, filter, reduce, find, fill, some, every

var numbers = [3, 1, 2, 3, 4, 5, 6, 3];
// var numbers = [6, 6, 6, 6, 6];

// numbers.sort(function (a, z) {
//   //   return a - z; // 1
//   return z - a; // 1
// });

// console.log(numbers);

// function mySort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       console.log('i', i);
//       console.log('j', j);

//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// mySort(numbers);

// console.log(numbers);

// var result = numbers.map(function (el) {
//   return el * 10;
// });

// var result = [];

// numbers.forEach(function (el) {
//   result.push(el * 10);
// });

// console.log('result', result);

// var result = numbers.filter(function (el) {
//   return el == 3; // boolean
// });

// console.log(result.length);

// function myFilter(arr, callback) {
//   var newArr = [];

//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     var isAdd = callback(element);

//     if (isAdd) {
//       newArr.push(element);
//     }
//   }

//   return newArr;
// }

// var result = myFilter(numbers, function (el) {
//   return el == 3;
// });

// console.log(result);

// var result = numbers.find(function (el) {
//   return el == 20; // boolean
// });

// var result = numbers.findIndex(function (el) {
//   return el == 3; // boolean
// });

// console.log(result);

// if (result !== undefined)
//   // if(result){

//   true;
// var a = 2;
// var a = 'Hello';
// var a = true;

// false;
// var b = false;
// var b = null;
// var b = undefined;
// var b = 0;
// var b = '';

// var result = numbers.findIndex(function (el) {
//   return el == 3; // boolean
// });

// console.log(result);

// var sum = 0;

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];

//   sum += element;
// }

// var result = numbers.reduce(function (sum, el) {
//   return sum + el;
// }, 0);

// console.log(result);

// var result = numbers.some(function (el) {
//   return el == 6;
// });

// var result = numbers.every(function (el) {
//   return el == 6;
// });

// var result = numbers.some(function (el) {
//   return el[0].toLowerCase() == "a";
// });

// var result = numbers.every(function (el) {
//   return el[0].toLowerCase() == 'a';
// });

// console.log(result);
