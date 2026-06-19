// PRIMITIVE | STACK
// var a = 5;

// var b = a;

// a = 15;

// var c = a + b;

// console.log(a); //15
// console.log(b); //5
// console.log(c); //20

// INPRIMITIVE | HEAP
// ARRAY | OBJECT | FUNCTION

// var student1 = 'John';
// var student2 = 'Marry';
// var student3 = 'Jane';

// var mixList = ['John', true, 12, null, [1, 2]];
// var students = ['John', 'Marry', 'Jane', 'Katty'];

// var lastIndex = students.length - 1;

// var lastStudentName = students[lastIndex];

// console.log(lastStudentName);

// var numbers = [1, 2, 3, 4];

// // var numbers2 = numbers;
// var numbers2 = numbers.concat();

// numbers[0] = 100;

// console.log('numbers:', numbers); // [100, 2, 3, 4]
// console.log('numbers2:', numbers2); // [1, 2, 3, 4]

var numbers1 = [1, 2, 3, 4];
var numbers2 = [5, 6, 7, 8];

var numbers3 = numbers1.concat();

console.log('numbers3', numbers3);
