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

function a1(num1, num2) {
  // logic....
}

function a2(num1, num2) {
  // logic....
}

function a3(num1, num2) {
  // logic....
}

function A(n1, n2, callback) {
  var total = n1 + n2;

  var result = callback(total, 100);

  return result;
}

var netice1 = A(45, 21, a1);
A(45, 21, a2);
A(45, 21, a3);
