const loadingContent = document.querySelector('#loadingContent');
const alertContent = document.querySelector('#alertContent');
const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');

const API_KEY = '8f5d4d8c';

searchBtn.addEventListener('click', function () {
  console.log(searchInput.value);

  showMovies(searchInput.value);
});

function showMovies(searchTitle) {
  if (!searchTitle.trim()) {
    alert('Invalid search value!');
    return;
  }

  //RESET
  loadingContent.classList.remove('d-none');
  alertContent.classList.add('d-none');

  const getMovie = fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTitle}`,
  );

  getMovie
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderList(data.Search);
    })
    .catch((errorResponse) => {
      alertContent.classList.remove('d-none');
      alertContent.innerHTML = errorResponse.message;
    })
    .finally(() => {
      loadingContent.classList.add('d-none'); // Loading logic
    });
}

function renderList(list) {
  const contentList = document.querySelector('#contentList');

  console.log('list', list);

  const newContentData = !list
    ? "<h2 class='text-light text-center'> Empty data </h2>"
    : list
        .map((movie) => {
          return `<div class="col-lg-3">
          <div class="card">
            <img
              src="${movie.Poster}"
              class="card-img-top"
              alt="${movie.Title}" />
            <div class="card-body">
              <h5 class="card-title">
                ${movie.Title} 
              </h5>
              <p class="card-text">
                ${movie.Year}
              </p>
            </div>
          </div>
        </div>`;
        })
        .join('');

  contentList.innerHTML = newContentData;
}
