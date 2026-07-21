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

function A() {
  function B() {
    console.log('Test');
  }

  return B;
}

// let netice = A();

// netice();

let netice = A;

var c = netice();

c();
