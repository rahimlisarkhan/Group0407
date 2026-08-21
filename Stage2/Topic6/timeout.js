// (setInterval, setTimeout, clearInterval, clearTimeout);

// CALL STACK

// // 1ci dereceli  - ADI is goren digerinden asili olmayan
// function A() {
//   console.log('A');
// }

// A();

// // 2ci Derecelidir
// setTimeout(function () {
//   console.log('Timeout');
// }, 3000); // ms

// let siraNomresi;

// imgTag.src = 'https:// gif doyus';

// clearTimeout(siraNomresi);

// siraNomresi = setTimeout(() => {
//   console.log('Timeout...');

//   imgTag.src = 'https:// win.png';
// }, 1000);

// const siraNomresi2 = setTimeout(() => {
//   console.log('Timeout2...');
// }, 1000);

// console.log(siraNomresi);

// clearTimeout(siraNomresi);
// console.log(siraNomresi2);

const stopBtn = document.querySelector('#stopBtn');
const playBtn = document.querySelector('#playBtn');
const clearBtn = document.querySelector('#clearBtn');
const screenClock = document.querySelector('#screenClock');
let sec = 0;

const saveData = [];

let intervalIndex;

playBtn.addEventListener('click', function () {
  clearInterval(intervalIndex);

  intervalIndex = setInterval(() => {
    console.log('Working...');

    sec++;

    screenClock.innerHTML = convertTime(sec);
  }, 1000);
});

stopBtn.addEventListener('click', function () {
  console.log('Stop', intervalIndex);

  clearInterval(intervalIndex);
});

clearBtn.addEventListener('click', function () {
  clearInterval(intervalIndex);
  sec = 0;
  screenClock.innerHTML = convertTime(sec);
});

function convertTime(s) {
  let min = Math.floor(s / 60)
    .toString()
    .padStart(2, '0');
  let qaliqS = (s % 60).toString().padStart(2, '0');

  return `${min}:${qaliqS}`;
}
