const a = 'az';
const b = 'filial 1';

const list = [1, 2, 3, 4];

const themeSetting = {
  name: 'yellow',
  color: '#F43134',
};

// localStorage.setItem('lang', a);
// localStorage.setItem('currentBranch', b);
// localStorage.setItem('numbers', JSON.stringify(list)); // "[1,2,3,4]"
// localStorage.setItem('currentTheme', JSON.stringify(themeSetting));

// const data = localStorage.getItem('currentBranch');

// localStorage.removeItem('currentBranch');

// console.log('data', data);

// //====================================
// const checkForCache = {}; // cache funksiyadan kenarda olmalidir, yoxsa her cagirista sifirlanir

// function sum(a, b) {
//   const key = `${a}-${b}`; // '13-12'

//   console.log('checkForCache', checkForCache);

//   if (checkForCache.hasOwnProperty(key)) {
//     console.log('cache-den geldi:', key);
//     return checkForCache[key]; // return value 10ms
//   }

//   console.log('hesablandi:', key);
//   const total = a + b; // 700ms

//   checkForCache[key] = total;
//   return total;
// }

// const inputA = document.querySelector('#inputA');
// const inputB = document.querySelector('#inputB');
// const btn = document.querySelector('#btn');
// const resultDiv = document.querySelector('#result');

// btn.addEventListener('click', function () {
//   const a = Number(inputA.value);
//   const b = Number(inputB.value);

//   resultDiv.innerHTML = sum(a, b); // 700ms => 10ms
// });
