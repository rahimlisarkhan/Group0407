const myPromise = new Promise((ugurlu, ugursuz) => {
  // internet connection....

  const isSuccess = true;
  const serverData = {
    result: [1, 2, 3, 4, 5],
    message: 'OK',
  };

  if (isSuccess) {
    ugurlu(serverData);
  } else {
    ugursuz('ERROR_Zahair');
  }
});

myPromise.then((data) => {
  const divContent = document.querySelector('#content');

  divContent.innerHTML = data.result.map((el) => `<li>${el} </li>`).join('');

  console.log('HerSey ugurludur...', data.result);

  //   A();
});

myPromise.catch((error) => {
  console.log('Ugursuzdur', error);

  alert('Xeta bas verdi yeniden deneyin');
  //   B();
});

myPromise.finally(() => {
  console.log('Final');
});

// function getMovies() {
//   // ...data
// }
// function renderContent() {
//   // html... logic
// }

// const result = getMovies();

// renderContent(result);

// function getMovies(cl) {
//   // ...data

//   const data = [];

//   cl(data);
// }
// function renderContent() {
//   // html... logic
// }

// getMovies(renderContent);
