var str = 'Hello';
// var str = '   Hello ';
// var str = 'H-e-l-l-o';
// var str = '1';
var numbers = [1, 2, 3, 4];

// var result = str.toLowerCase();
// var result = str.toUpperCase();
// var result = str.includes('l'); // true
// var result = str.indexOf('l'); // true
// var result = str.lastIndexOf('l'); // true
// var result = str.at(0);
// var result1 = str.split('-');
// var result1 = str.replaceAll('l', 'd');
// var result1 = str.replace('l', 'd');
// var result1 = str.padStart(3, '0');
// var result1 = str.trim();
// var result1 = str.concat('ddassa');
// var result1 = str + 'dsasdasd';
// var result1 = str.startsWith('h');
// var result1 = str.toLowerCase().startsWith('h');
// var result1 = str.toLowerCase().endsWith('o');
// var result1 = str.slice(1, 4);

var lorem = `Lorem ipsum dolor `;

if (lorem.length > 50) {
  var cutStr = lorem.slice(0, 50);
  var resultStr = cutStr + '...';
  // var resultStr = `${cutStr}...`;

  console.log(resultStr);
} else {
  console.log(lorem);
}

// var result2 = result1.join('');
// console.log(result1);
// console.log(result2);

// numbers[0]; // 1

// numbers[0] = 20;

// console.log(numbers);

// str[0] = 'G';

// console.log(str); // Doesn't work

// console.log(str[0]);
// console.log(str.length);
