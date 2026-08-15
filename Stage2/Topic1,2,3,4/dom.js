// const a = document.URL;

// console.log(a);

// FIND

// const titleEl = document.querySelector('h1');

// console.log(titleEl);

// // CHANGE & CREATE
// titleEl.innerHTML = 'Salam';
// // titleEl.style.backgroundColor = 'red';
// // titleEl.setAttribute('class', 'text-danger');

// // REMOVE

//FIND
// const listContent = document.querySelector('#listContent');
// const pEl = document.querySelector('#para');

// console.log('listContent', listContent);

// const imgTag = document.createElement('img');

// imgTag.src =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrZ8_T1gZyIsTKl4XBZmtZ6GYMb9UNNSf3kF3uBxHdWwi7hxNlcUPTFE&s=10';

// const result = imgTag.classList.contains('img-fluid');

// const el = listContent.nextElementSibling;

// el.innerHTML = 'Salam';

// listContent.style.backgroundColor = 'yellow';
// listContent.append(imgTag);

// listContent.removeChild(pEl);

const inputfullName = document.querySelector('#fullName');
const btnSend = document.querySelector('#btnSend');

btnSend.addEventListener('click', function () {
  const inputValue = inputfullName.value;

  console.log('inputValue', inputValue);

  // CHANGE - STYLE, ELEMENT or Content, Attr, Class, Check logic
  inputfullName.style.border = '2px solid green';
  inputfullName.value = '';
});
