// var numbers = [1, 2, 3, 4];

// function foo() {
//   var a = 5;
//   console.log('Foo', a);

//   return a;
// }

// // console.log(foo);

// var result = foo();

// console.log('Xaricden', result); // 5

// function ekrandaGoster(list, info, isGoren) {
//   var student = ['John'];
//   console.log('list', list);
//   console.log('info', info);
//   console.log('isGoren', isGoren);
// }

// ekrandaGoster(numbers, 'Test', foo);

// function A() {
//   console.log('working...');
// }

// var B = function () {
//   console.log('working...');
// };

// var number = [];

// var fullname = 'Str';

// function sum(a, b) {
//   var netice = a + b;

//   return netice;
// }

// var xariciNetice = sum(12, 4);

// console.log('xariciNetice', xariciNetice);

// function telebeAida() {
//   console.log('Aidaya izah olundu');
// }

// function telebeEmrah() {
//   console.log('Emraha izah olundu');
// }

// function mentor1() {
//   telebeAida();
//   console.log('Mentor isledi.');
// }

// function mentor2() {
//   telebeEmrah();
//   console.log('Mentor isledi.');
// }

// mentor1();
// mentor2();

// function mentorDersiIzahDden(telebeOxuyur) {
//   //   foo();

//   console.log('========');

//   telebeOxuyur();

//   console.log('Mentor isledi.');
// }

// mentorDersiIzahDden(telebeAida);

// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);
// mentorDersiIzahDden(telebeEmrah);

// function isiqUstasi(num, kv) {
//   var ustaninPulu = 100;

//   var netice = kv * ustaninPulu + num;

//   return netice;
// }

// function suUstasi(num, kv) {
//   var ustaninPulu = 70;

//   var netice = (kv * ustaninPulu) / num;

//   return netice;
// }

// function qazUstasi(num, kv) {
//   var ustaninPulu = 50;

//   var netice = (ustaninPulu * num) / kv;

//   return netice;
// }

// function materialHesablayan(evUstasi, num1, num2) {
//   var materialUmumiOtagaGore = 20;
//   var totalKV = num1 + num2;

//   var netice = evUstasi(materialUmumiOtagaGore, totalKV);

//   return `Bu usta bu evi bu qiymete gorecek: ${netice} manat`;
// }

// var ustaninCavabi1 = materialHesablayan(isiqUstasi, 4, 75);
// var ustaninCavabi2 = materialHesablayan(qazUstasi, 4, 75);
// var ustaninCavabi3 = materialHesablayan(suUstasi, 4, 75);

// console.log(ustaninCavabi1);
// console.log(ustaninCavabi2);
// console.log(ustaninCavabi3);

// function a1(num1, num2) {
//   // logic....
// }

// function a2(num1, num2) {
//   // logic....
// }

// function a3(num1, num2) {
//   // logic....
// }

// function A(n1, n2, callback) {
//   var total = n1 + n2;

//   var result = callback(total, 100);

//   return result;
// }

// var netice1 = A(45, 21, a1);
// A(45, 21, a2);
// A(45, 21, a3);

// function A() {
//   var num = 4;

//   console.log(num);
// }

// var A = function () {
//   var num = 4;

//   return num;
// };

// console.log(A); // function () {

//   var num = 4;

//   console.log(num);
// };

// var LIST = [1, 2, 3, 4];

// console.log(LIST); // [1, 2, 3, 4]

// var result = A(); //undefined

// console.log(result); // 4

// var b = 5;

// console.log(b);

// b = 'Hello';

function B() {
  console.log('B working...');
}

function C() {
  console.log('C working...');
}

// function A(cagirilacaqFn) {
//   cagirilacaqFn();

//   console.log('A working...');
// }

// function A1() {
//   C();

//   console.log('A working...');
// }

// function A2() {
//   B();

//   console.log('A working...');
// }

// A1();
// A2();

// A(C);
// A(B);

// var list = [1, 2, 3, 4];
// var list2 = ['a', 'b', 'c', 'd'];

// for (let i = 0; i < list.length; i++) {
//   const element = list[i];

//   console.log(element);
// }

// for (let i = 0; i < list2.length; i++) {
//   const element = list2[i];

//   console.log(element);
// }

// function render(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     console.log(element);
//   }
// }

// render(list);
// render(list2);

var list = [1, 2, 3, 4, 5, 6];

function handleElVurma(element) {
  var yeniNetice = element * 3;

  return yeniNetice;
}

// function handleElToplama(element) {
//   var yeniNetice = element + 3;

//   return yeniNetice;
// }

// function handleElVariantAdlari(element) {
//   var yeniNetice = `Variant ${element}`;

//   return yeniNetice;
// }

function renderMap(arr, isGoren) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];

    // var result = el * num;
    var result = isGoren(el);

    newArr.push(result);
  }

  return newArr;
}

var netice = renderMap(list, handleElVurma);

var netice2 = renderMap(list, function (element) {
  var yeniNetice = `Variant ${element}`;

  return yeniNetice;
});

var netice3 = renderMap(list, function (element) {
  var yeniNetice = element + 3;

  return yeniNetice;
});

var netice4 = list.map(function (element) {
  var yeniNetice = element + 3;

  return yeniNetice;
});

console.log(netice);
console.log(netice2);
console.log(netice3);

// function renderMap(arr, num) {
//   var newArr = [];

//   for (var i = 0; i < arr.length; i++) {
//     var el = arr[i];

//     var result = el * num;

//     newArr.push(result);
//   }

//   return newArr;
// }

// var netice = renderMap(list, 3);

// console.log(netice);
