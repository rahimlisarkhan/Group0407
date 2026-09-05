'use strict';

// const a = 10;

// console.log('a', a);

const loadingContent = document.querySelector('#loadingContent');
const alertContent = document.querySelector('#alertContent');
const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');

const API_KEY = '8f5d4d8c';

searchBtn.addEventListener('click', function () {
  console.log(searchInput.value);

  showMovies(searchInput.value);
});

// function showMovies(searchTitle) {
//   // Validation
//   if (searchTitle.trim() == '') {
//     alert('Invalid search value!');
//     return;
//   }

//   //RESET
//   loadingContent.classList.remove('d-none');
//   alertContent.classList.add('d-none');

//   const getMovie = fetch(
//     `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTitle}`,
//   ); // Promise

//   getMovie
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log('data', data);

//       renderList(data.Search);
//     })
//     .catch((errorResponse) => {
//       alertContent.classList.remove('d-none');
//       alertContent.innerHTML = errorResponse.message;
//     })
//     .finally(() => {
//       loadingContent.classList.add('d-none'); // Loading logic
//     });
// }

async function showMovies(searchTitle) {
  // Validation
  if (searchTitle.trim() == '') {
    alert('Invalid search value!');
    return;
  }

  //RESET
  loadingContent.classList.remove('d-none');
  alertContent.classList.add('d-none');

  try {
    const getMovie = fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTitle}`,
    ); // Promise

    const response = await getMovie;

    const data = await response.json();

    renderList(data.Search);

    console.log('data', data);
  } catch (errorResponse) {
    alertContent.classList.remove('d-none');
    alertContent.innerHTML = errorResponse.message;
  } finally {
    loadingContent.classList.add('d-none'); // Loading logic
  }

  // getMovie
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log('data', data);

  //     renderList(data.Search);
  //   })
  //   .catch((errorResponse) => {
  //     alertContent.classList.remove('d-none');
  //     alertContent.innerHTML = errorResponse.message;
  //   })
  //   .finally(() => {
  //     loadingContent.classList.add('d-none'); // Loading logic
  //   });
}

function renderList(list) {
  const contentList = document.querySelector('#contentList');

  console.log('list', list);

  const newContentData =
    list == undefined
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

// try {
//   a = 5;

//   let a;

//   console.log(a);
// } catch (err) {
//   console.log(err);
// } finally {
// }

// // ...

// console.log('davam edir...');
