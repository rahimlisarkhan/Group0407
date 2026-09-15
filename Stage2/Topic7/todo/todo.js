const todoInput = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const listContent = document.querySelector('#listContent');

const localData = sessionStorage.getItem('todoData');
const data = localData ? JSON.parse(localData) : []; // ['Alma al', 'Ders oxu']

function renderList() {
  const items = data.map(function (todo) {
    return `<li>${todo}</li>`;
  });

  listContent.innerHTML = items.join('');
}

addBtn.addEventListener('click', function () {
  const value = todoInput.value.trim();

  if (value == '') return; // bos string elave etmirik

  data.push(value);
  todoInput.value = '';

  // PERSIST
  sessionStorage.setItem('todoData', JSON.stringify(data));

  renderList();
});

renderList();

// sessionStorage.clear()
