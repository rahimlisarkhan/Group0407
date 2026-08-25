// function Car(marka, model, year) {
//   this.marka = marka;
//   this.model = model;
//   this.year = year;
//   this.speed = 0;

//   this.start = function () {
//     this.speed += 10;
//   };

//   this.break = function () {
//     this.speed -= 1;
//   };

//   this.stop = function () {
//     this.speed = 0;
//   };
// }

// OOP
// class Car {
//   speed = 0;

//   constructor(marka, model, year) {
//     this.marka = marka;
//     this.model = model;
//     this.year = year;
//   }

//   start() {
//     this.speed += 10;

//     this.monitoring();
//   }

//   break() {
//     this.speed -= 1;
//     this.monitoring();
//   }

//   stop() {
//     this.speed = 0;
//     this.monitoring();
//   }

//   monitoring() {
//     console.log(`Marka: ${this.marka}, speed:${this.speed}`);
//   }
// }

// const myCar1 = new Car('Bmw', 'X6', 2020);
// const myCar2 = new Car('A', 'X1', 2019);

// console.log(myCar1);

// myCar2.start();
// myCar2.start();
// myCar2.break();
// myCar2.break();
// myCar2.break();

// console.log(myCar2);

// const myCar1 = {
//   marka: '',
//   model: '',
//   year: '',

//   start: function () {},

//   stop: function () {},

//   break: function () {},

//   monitoring: function () {},
// };

// const myCar2 = {
//   marka: '',
//   model: '',
//   year: '',

//   start: function () {},

//   stop: function () {},

//   break: function () {},

//   monitoring: function () {},
// };

// const myObj = {
//   name: 'John',
// };

// myObj.name = 'Marry'; // upt
// myObj.age = 20; // upt

class Animal {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  eating() {
    console.log('Eating...');
  }

  drinking() {
    console.log('Drinking...');
  }
}

class WaterAnimal extends Animal {
  swiming() {
    console.log(`${this.name} Swimming...`);
  }
}

const lionAnimal = new Animal('Lion', 7);

const delfinAnimal = new WaterAnimal('Delfin', 2);

console.log(lionAnimal);
console.log(delfinAnimal);

delfinAnimal.swiming();
