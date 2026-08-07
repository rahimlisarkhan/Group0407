// console.log(Math);

// Math.random();

// const numbers = [1, 3, 4];

// const myMath = {
//   PI: 3.14,
// };

// console.log(myMath.PI);

// const result = typeof numbers; //
// const result = typeof null; //
// const result = null; //
// const result = Array.isArray(numbers); //

// console.log('global', this);

// const bankAccount1 = {
//   name: '',
//   balance: 0,
//   history: [],

//   assingName: function (accountName) {
//     this.name = accountName;
//   },

//   showBalance: function () {
//     // console.log(this.balance);
//     let result = `Balance: ${this.balance}`;

//     console.log(result);
//   },

//   addBalance: function (n) {
//     //Validation
//     if (n <= 0) {
//       alert('Invalid n');
//       return;
//     }

//     this.balance += n;

//     const transaction = `+${n}`;

//     this.history.unshift(transaction);

//     this.showBalance();
//   },

//   removeBalance: function (n) {
//     //Validation
//     if (n > this.balance) {
//       alert('Invalid n');
//       return;
//     }

//     this.balance -= n;

//     const transaction = `-${n}`;

//     this.history.unshift(transaction);

//     this.showBalance();
//   },
// };

// bankAccount1.assingName('ZaHair');

// bankAccount1.addBalance(1000);

// bankAccount1.removeBalance(20);

// bankAccount1.removeBalance(10);
// bankAccount1.removeBalance(5);

// bankAccount1.addBalance(100);

// console.log(bankAccount1);

// this.alert('Salam');
// console.log(this);

// function A() {
//   console.log(this); // WINDOW
// }

// A();

// const myObj = {
//   name: 'John',
//   balance: 0,

//   // foo: function () {
//   //   console.log(this); // Current Object

//   //   let thisData = this;

//   //   function bar() {
//   //     // logic...
//   //     console.log(this); // WINDOW
//   //     console.log(thisData); // Current Object
//   //   }

//   //   bar();
//   // },

//   foo: function () {
//     console.log(this); // Current Object

//     // let thisData = this;

//     const bar = () => {
//       // logic...
//       console.log(this); // Current Object
//       // console.log(thisData); // Current Object
//     };

//     bar();
//   },
// };

// const myObj2 = {
//   age: 45,
//   ...myObj,
// };

// // const myObj2 = myObj;

// myObj2.age = 45;

// myObj.foo();

// // console.log('myObj', myObj);
// // console.log('myObj2', myObj2);

// const lorem = 'Lorem ipsum bla bla bla';

// const result = TextHelper.truncate(lorem, 50);

// console.log(result);

const student = {
  name: 'John',
  age: 22,
  position: 'Developer',

  address: [1, 2, 3],
  postCode: 'AZ1000',
};

const student2 = {
  name: 'Marry',
  age: 26,
  position: 'Developer',
};

// student2.code = '1234';

// student2.sayHello = function () {
//   console.log('Hello');
// };

Object.prototype.info = function (obj) {
  console.log('Hello!', obj);
};

Array.prototype.sayHello = function () {
  console.log('Hello!', this);
};

const student3 = {
  name: 'Teo',
  age: 21,
  position: 'Developer',
  password: 'Zdsadajdj2421jnjdAZsdasdsadsa',
};

Object.info(student3);

const numbers = [1, 2, 3, 4];

numbers.sayHello();

// console.log('student3', student3);

// delete student3.name

// const numbers = [1, 2, 3];

// const x = numbers[0];
// const y = numbers[1];
// const z = numbers[2];

// const [x, y, z] = numbers;

// const {
//   name: userName,
//   age: userAge,
//   position: userPosition,
//   postCode: userPostCode,
// } = student;

// const { name, age, position, postCode = '-' } = student2;

// const { name, ...data } = student3; // use

// console.log('name', name);

// delete student3.password;

// const { password: _password, ...studetData } = student3;

// console.log('studetData', studetData); // Datani istifade olunacagi yerdir

// console.log(x, y, z); // 1, 2, 3
// console.log(userName, userAge, userPosition, userPostCode); // 1, 2, 3
// console.log(name, age, position, postCode); // 1, 2, 3

// const result = Object.keys(student);
// const result = Object.values(student);

// Object.assign(student, student2);
// const result = Object.hasOwn(student, 'address'); // same logic for includes
// console.log(result);

// const data = {
//   ...student,
//   ...student2,
//   position: 'Designer',
// };

// const data = [
//   ['name', 'John'],
//   ['age', 22],
//   ['position', 'Developer'],
// ];

// console.log(student2);
