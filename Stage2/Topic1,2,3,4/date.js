// const tarix = new Date('1995-02-17');

// // console.log('tarix', tarix);

// const result1 = tarix.getDay(); // 2 heftenin gunu
// // const result2 = tarix.getMonth(); // 7
// // const result3 = tarix.getFullYear(); // 2026
// // const result4 = tarix.getHours(); // 20
// // const result5 = tarix.getDate(); // 12
// // const result6 = tarix.getUTCDate(); // 11
// // const result7 = tarix.getMilliseconds(); // 11
// // const result7 = tarix.getTime(); // 11

// // console.log(result1);
// // console.log(result2);
// // console.log(result3);
// // console.log(result4);
// console.log(result1);

// const tarix = new Date('1995-02-17');

// tarix.setFullYear(2000);

// console.log(tarix.getDay()); //

// CLOCK
const date = new Date();

const hours = date.getHours().toString().padStart(2, '0');
const min = date.getMinutes().toString().padStart(2, '0');
const sec = date.getSeconds().toString().padStart(2, '0');

const result = `${hours}:${min}:${sec}`;

console.log(result);

// SHOW LANG MONTH

const azMonths = [
  'Yanvar',
  'Fevral',
  'Mart',
  'Aprel',
  'May',
  'İyun',
  'İyul',
  'Avqust',
  'Sentyabr',
  'Oktyabr',
  'Noyabr',
  'Dekabr',
];

const trMonths = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

const enMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const ruMonths = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const months = {
  az: azMonths,
  tr: trMonths,
  en: enMonths,
  ru: ruMonths,
};

const monthIndex = date.getMonth(); //7

const lang = prompt('Dil kodunu qedy edin');

const dynamicList = months[lang];

console.log(dynamicList[monthIndex]);
