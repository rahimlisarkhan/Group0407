// Input eventlari // focus, blur, input or change
// Keyboard eventlari // keyup keydown
// Mouse Eventlari // mouseenter mouseleave,
// Other, online offline, copy,paste, cut
// Touch Eventlari
// Window ile window.

// const click1Btn = document.querySelector('#click1');
const click2Btn = document.querySelector('#click2');
const click3Btn = document.querySelector('#click3');
const nameForm = document.querySelector('#nameForm');
const sendBtn = document.querySelector('#sendBtn');
const boxContent = document.querySelector('#boxContent');
const btnGroup = document.querySelector('#btnGroup');

const typingContent = document.querySelector('#typingContent');

console.log('nameForm', nameForm);

const colors = ['green', 'yellow', 'red', 'blue'];

function randomEl(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

click2Btn.addEventListener('click', function (e) {
  //   click2Btn.style.color = 'red';

  const randomColor = randomEl(colors);
  e.target.style.color = randomColor;
});

click3Btn.ondblclick = function (e) {
  console.log('db clicked');

  const randomColor = randomEl(colors);
  e.target.style.color = randomColor;
};

nameForm.addEventListener('input', function (e) {
  const limit = 20;
  const text = e.target.value;
  const isRateLimit = text.length > limit; // boolean

  typingContent.innerHTML = `${text.length} / ${limit} `;

  typingContent.style.color = isRateLimit ? 'red' : 'black';
  sendBtn.disabled = isRateLimit;
});

nameForm.addEventListener('keydown', function (e) {
  const isEnter = e.key == 'Enter';

  if (isEnter) {
    console.log('sent');
    e.target.value = '';
  }
});

boxContent.addEventListener('mouseenter', function (e) {
  console.log('in');
  btnGroup.style.display = 'none';
});

boxContent.addEventListener('mouseleave', function (e) {
  console.log('out');
  btnGroup.style.display = 'block';
});

// nameForm.addEventListener('focus', function (e) {
//   console.log('e', e);

//   nameForm.style.border = '2px solid blue';
// });

// nameForm.addEventListener('blur', function (e) {
//   nameForm.style.border = '1px solid yellow';
// });

function sayHello(target) {
  console.log('click1', target);
}

window.addEventListener('scroll', function (e) {
  console.log('scrolling', e);
});

console.log(window);
