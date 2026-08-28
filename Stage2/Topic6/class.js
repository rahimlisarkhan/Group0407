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
  #MIN_INTERVAL = 1;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  eating() {
    console.log('Eating...');
  }

  drinking() {
    console.log('Drinking...');
    // this.#monitoring();
  }

  #monitoring() {
    console.log('Monitoring...', this.#MIN_INTERVAL);
  }
}

// Inherantce
class WaterAnimal extends Animal {
  #refetch_limit = 4; // Abstrack

  #dnt_count = 0;

  constructor(name, year, dnt) {
    super(name, year);

    this.#dnt_count = dnt;
  }

  static processing(num) {
    return 104 + num;
  }

  // Polimorism
  swiming(type) {
    console.log(`${this.name} Swimming...`);

    if (type == 'sirtUstu') {
      this.drinking();
    }

    if (type == 'kepenek') {
      // logic...
    }
  }

  // Encapculation
  get dntCode() {
    return this.#dnt_count;
  }

  set dntCode(num) {
    // validation...
    if (num < 0) {
      throw new Error('Error invalid num');
    }

    this.#dnt_count = num;
  }
}

const lionAnimal = new Animal('Lion', 7);

const delfinAnimal = new WaterAnimal('Delfin', 2, 44);

// console.log(lionAnimal);
console.log(delfinAnimal);

delfinAnimal.swiming();

const result = delfinAnimal.processing(2);

const result = WaterAnimal.processing(2);

// delfinAnimal.dntCode = 100;

// console.log(delfinAnimal.dntCode);

// delfinAnimal.#refetch_limit = 10;

// console.log(delfinAnimal.#refetch_limit);

class TextHelper {
  // Capitalize the first letter of a string
  static capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
  }

  // Make the whole string uppercase
  static toUpper(str) {
    return str ? str.toUpperCase() : '';
  }

  // Make the whole string lowercase
  static toLower(str) {
    return str ? str.toLowerCase() : '';
  }

  // Remove spaces from the start and end
  static trim(str) {
    return str ? str.trim() : '';
  }

  // Reverse the characters in a string
  static reverse(str) {
    if (!str) return '';
    return str.split('').reverse().join('');
  }

  // Count the number of words
  static wordCount(str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).length;
  }

  // Shorten a string and add "..." if it is too long
  static truncate(str, max) {
    if (!str) return '';
    if (str.length <= max) return str;
    return str.slice(0, max) + '...';
  }

  // Convert "hello world" to "hello-world"
  static slugify(str) {
    if (!str) return '';
    return str.toLowerCase().trim().replace(/\s+/g, '-');
  }
}

// const textHelper = new TextHelper();

// textHelper.truncate();

TextHelper.truncate();

const date = new Date('04-02-2026');

const result = Date.now();
