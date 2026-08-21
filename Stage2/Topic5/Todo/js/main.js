//FIND
const todoInput = document.querySelector('#todo-input');
const saveBtn = document.querySelector('#save-btn');
const clearBtn = document.querySelector('#clear-btn');
const todoList = document.querySelector('#todo-list');
const alertCheck = document.querySelector('#alertCheck');

const data = []; // DATA LOGIC

saveBtn.addEventListener('click', function () {
  const todoValue = todoInput.value; // str

  // VALIDATION
  if (todoValue.trim() == '') {
    // alert('Zehmet olmasa duzgun doldurun');

    // CHANGE
    alertCheck.classList.remove('d-none');
    return;
  }

  // CHANGE
  alertCheck.classList.add('d-none');

  // arrayi icine yigaq
  data.push(todoValue);

  // POST - data -> server app

  renderList();

  todoInput.value = ''; //reset value
});

clearBtn.addEventListener('click', function () {
  window.location.reload();
  // window.history.back();
  // window.history.forward();
});

function renderList() {
  const newData = data
    .map((el) => {
      return `<li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  <span>${el}</span>
                </li>
            `;
    })
    .join('');

  // CHANGE
  todoList.innerHTML = newData;
}

const numbers = [2, 4, 6, 8, 10];

const numbers2 = numbers.map((n) => {
  return `Salam: ${n * 4}`;
});

// todoList.innerHTML = numbers2.join('');

// console.log('numbers2', numbers2);

// PWA
