// 1. 8 kyu Sum Arrays
// Test.assertEquals(sum([]), 0);
// Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);

// function sum(numbers) {
//   if (numbers.length == 0) {
//     return 0;
//   }

//   var count = 0;

//   for (var i = 0; i < numbers.length; i++) {
//     var num = numbers[i];

//     count += num;
//     // count = count + num;
//   }

//   return count;
// }

// // const result = sum([]);
// // const result = sum([12, 3, 4]);
// const result = sum([1, 5.2, 4, 0, -1]);

// // console.log(result); // 0
// // console.log(result); // 19
// console.log(result); // 19

// 8 kyu Sentence Smash
// assert.strictEqual(smash([]), '');
// assert.strictEqual(smash(['hello']), 'hello');
// assert.strictEqual(smash(['hello', 'world']), 'hello world');
// assert.strictEqual(smash(['hello', 'amazing', 'world']), 'hello amazing world');
// assert.strictEqual(
//   smash(['this', 'is', 'a', 'really', 'long', 'sentence']),
//   'this is a really long sentence',
// );

// Big - o
// TIME | 1 | n | n + 2
// SPACE

// function smash(words) {
//   return words.join(' ');
//   //   var str = '';
//   //   for (var word of words) {
//   //     str += ` ${word}`;
//   //   }
//   //   return str.trim();
// }

// var resul1 = smash([]);
// var resul2 = smash(['hello']);
// var resul3 = smash(['hello', 'world']);
// var resul4 = smash(['hello', 'amazing', 'world']);
// var resul5 = smash(['this', 'is', 'a', 'really', 'long', 'sentence']);

// console.log(resul1); // ''
// console.log(resul2); // 'hello'
// console.log(resul3); // 'hello world'
// console.log(resul4); // 'hello amazing world'
// console.log(resul5); // 'this is a really long sentence'
