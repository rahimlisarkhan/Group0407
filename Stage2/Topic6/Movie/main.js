const loadingContent = document.querySelector('#loadingContent');
const alertContent = document.querySelector('#alertContent');

function showMovies() {
  //RESET
  loadingContent.classList.remove('d-none');
  alertContent.classList.add('d-none');

  getMovie
    .then((response) => {
      renderList(response.data);
    })
    .catch((errorResponse) => {
      alertContent.classList.remove('d-none');
      alertContent.innerHTML = errorResponse.message;
    })
    .finally(() => {
      loadingContent.classList.add('d-none'); // Loading logic
    });
}

showMovies();

function renderList(data) {
  const contentList = document.querySelector('#contentList');

  const newContentData = data
    .map((movie) => {
      return `<div class="col-lg-3">
          <div class="card">
            <img
              src="${movie.cover_url}"
              class="card-img-top"
              alt="${movie.title}" />
            <div class="card-body">
              <h5 class="card-title">
                ${movie.title} <span class="badge text-bg-warning">${movie.imdb}</span>
              </h5>
              <p class="card-text">
                ${TextHelper.truncate(movie.overview, 30)}
              </p>
              <a href="${movie.watch_url}" target="_blank" class="btn btn-warning">Izle</a>
            </div>
          </div>
        </div>`;
    })
    .join('');

  contentList.innerHTML = newContentData;
}
