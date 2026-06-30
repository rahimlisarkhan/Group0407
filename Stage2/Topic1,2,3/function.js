// DRY - Don't repeat yourself

// var numbers = [1, 2, 3, 4, 5];
// var alp = ['a', 'b', 'c', 'd', 'f'];
// var alp2 = ['a1', 'b2', 'c3', 'd4', 'f5'];

// function printList(arr) {
//   console.log('------');

//   for (var el of arr) {
//     console.log('el', el);
//   }
// }

// printList(alp2);

// printList(alp);

// printList(numbers);

// function sum(a, b) {
//   //   var a = 1;
//   //   var b = 2;

//   console.log('c', c);

//   console.log(a + b);
// }

// sum(12, 45);
// sum(10, 4);

// function calc(n1, n2, operator) {
//   if (operator == 'plus') {
//     console.log(n1 + n2);
//   } else if (operator == 'minus') {
//     console.log(n1 - n2);
//   }
// }

// calc(112, 34, 'minus');
// calc(112, 34, 'plus');
// calc(12, 3, 'minus');

// function A() {
//   console.log('monitoring....');
//   console.log('fetching....');
//   console.log('done!');
// }

// A();

var fullname = 'ashley';
var fullname2 = 'zaur';

function toCapitalize(str) {
  // Edge cases
  if (str == undefined) {
    return '';
  } else if (str.trim() == '') {
    return '';
  }

  var firstLetter = str[0].toUpperCase();
  var others = str.slice(1, str.length);

  var result = firstLetter + others;

  return result;
}

// var capitalWord = toCapitalize(fullname);
// var capitalWord2 = toCapitalize('zaur');
// var capitalWord3 = toCapitalize('       ');
// var capitalWord4 = toCapitalize();

function sum(n1 = 0, n2 = 0) {
  var total = n1 + n2;
  return total;
}

function renderInfo(name, balance) {
  var customerName = toCapitalize(name); // Aysel
  var resultBalance = sum(balance, 50); // 90

  var info = `Hormetli ${customerName}!Sizin yekun balansinin bonus ile birlikde ${resultBalance} qeder teskil edir`;

  return info;
}

var customer1 = renderInfo('aysel', 40);
var customer2 = renderInfo('zahir', 120);
var customer3 = renderInfo('muxtar', 12);

console.log(customer1);
console.log(customer2);
console.log(customer3);
