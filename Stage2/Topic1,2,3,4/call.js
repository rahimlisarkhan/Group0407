// const myObj = {
//   name: 'John',

//   foo: function () {
//     console.log(this); //

//     var thisArr = this;

//     const bar = function () {
//       console.log(this); //
//       //   console.log('thisArr', thisArr); //
//     };

//     bar();
//   },
// };

// myObj.foo(); //

function A(a = 0, b = 0, c = 0, d = 0, f = 0, e = 0) {
  console.log('a', a);

  console.log(this.balance); //100
}

const myObj = {
  name: 'John',
  balance: 100,

  //   A: function () {
  //     console.log(this.name);
  //   },
};

const myObj2 = {
  name: 'Marry',
  balance: 10,

  //   A: function () {
  //     console.log(this.name);
  //   },
};

// myObj.A();

// A()
// A.call(myObj, 1, 2, 3, 4, 5);
// A.apply(myObj, [1, 2, 3, 4, 5]);
const yeniFn = A.bind(myObj, 1, 2, 3, 4, 5);

yeniFn();

const yeniFn2 = A.bind(myObj2, 1, 2, 3);

yeniFn2();
