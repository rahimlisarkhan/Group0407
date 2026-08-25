// EVENT LOOP

// 1. Adi +
// 2. Micro -
// 3. Macro +

setTimeout(() => {
  console.log('Zahair');
}, 0);

console.log('Ali');

setTimeout(() => {
  console.log('Aytekin');
}, 1000);

console.log('Orxan');

// 1. Ali
// 2. Orxan
// 3. Zahair
// 4. Aytekin
