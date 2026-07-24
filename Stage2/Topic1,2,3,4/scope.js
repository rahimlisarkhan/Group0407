//          VAR LET CONST
// GLOBAL   yes no  no.   (SCOPE)
// FUNCTION yes yes yes
// BLOCK.   no  yes yes
// Assign  yes. yes no

// const a = ['a', 'b'];

// a.push('100');

// var a = 10;
// let a = 10;
// const a = 10;

// function A() {
//   const b = 10;

//   console.log(b);
// }

// console.log(b);

// A();
// const A = function () {
//   var b = 10;

//   console.log(b);
// };

// var age = 18;

// if (age >= 18) {
//   //   var c = 20;
//   let c = 20;
//   const c = 20;

//   console.log(c); // 20
// }

// console.log(c); // 20

// let age = 10;

// function sayHello() {
//   var age = 100;

//   function splitHello() {
//     var age = 1000;

//     console.log('Hello:', age); //100
//   }

//   splitHello();

//   //   console.log('Hello:', age); //100
// }

// sayHello();

// function foo() {
//   console.log('Foo!');

//   function bar() {
//     console.log('Bar!');
//   }
//   return bar;
// }

// let netice = foo();

// netice(); // ?????? Explain please step by step

// function A() {
//   console.log('Test');
//   return 100;
// }

// let netice = A();

// console.log(netice);

// function A() {
//   function B() {
//     console.log('Test');
//   }

//   B();

//   return 100;
// }

// let netice = A();

// console.log(netice);

// function A() {
//   function B() {
//     console.log('Test');
//   }

//   return B;
// }

// // let netice = A();

// // netice();

// let netice = A;

// var c = netice();

// c();

// function innerFn() {
//   let x = 10;

//   function outerFn() {
//     const y = 11;
//     return y * x;
//   }

//   // return outerFn();
//   const innerResult = outerFn();
//   return innerResult;
// }

// let result = innerFn();

// console.log(result); // ?????? Explain please step by step

// REST & SPREAD

// function A(a, b, c, d, f, e, g, h) {
// function A(a, ...list) {
function A(...data) {
  // REST
  console.log('data', data);

  for (let el of data) {
    console.log('el', el);
  }

  // console.log('arguments', arguments);
}

// A(1, 2, 3, 4, 5, 6);
// A(1, 2, 3, 4);
// A(1, 2);

// Math.max(12, 5, 4, 34, 2);

// SPREAD
// const numbers = [1, 2, 3, 4, 5];

// // const numbers2 = [100, 101, ...numbers];
// const numbers2 = [...numbers];

// // const result = Math.max(1, 2, 3, 4, 5);
// const result = Math.max(...numbers); // (1,2,3,4,5)

// console.log(result);

// console.log('numbers2', numbers2);

// Closure

function calc() {
  let x = 10;

  function outerFn(interval) {
    // x = x + interval;
    x += interval;

    return x;
  }

  return outerFn;
}

const ayxanCalc = calc();

const alinaCalc = calc();

// ayxanCalc(3);
// ayxanCalc(3);
// ayxanCalc(3);

// const resultForAyxan = ayxanCalc(3);

// console.log(resultForAyxan);

alinaCalc(2);
alinaCalc(3);
alinaCalc(1);

const resultForAlina = alinaCalc(2);

console.log(resultForAlina);
