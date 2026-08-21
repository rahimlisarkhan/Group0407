const isPortrait = window.screen.orientation.type == 'portrait-primary';

console.log(window.location);

const isAboutPage = window.location.pathname.endsWith('about.html');

function A() {
  console.log('change dom tema');
}

function B() {}

if (isAboutPage) {
  A();
}

// console.log(window.navigator);

// const geoLocation = window.navigator.geolocation;

// geoLocation.getCurrentPosition(
//   function (data) {
//     console.log('Location done');
//     console.log(data);
//   },
//   function (error) {
//     console.log('Error');
//     console.log(error);
//   },
// );

// if (window.innerWidth > 800) {
//   A();
// } else {
//   B();
// }

// POKEMON
// E - elektrik \ su qalib gelir
// W - su | alov qalib gelir
// F - alov | elektrik qalib gelir

// DOM FIND
// Logic....

// DATA
const pokemons = ['e', 'w', 'f'];
let player1Point = 0;
let player2Point = 0;

function randomEl() {
  const randomIndex = Math.floor(Math.random() * pokemons.length);

  return pokemons[randomIndex];
}

window.addEventListener('keydown', function (e) {
  const comp = randomEl();
  const me = e.key;

  // Validation...

  const isHasEl = pokemons.includes(me);

  if (!isHasEl) {
    this.alert('Duzgun secin: e w f');
    return;
  }

  console.log('-------');

  if (me == 'e' && comp == 'f') {
    console.log('WIN');
    player1Point += 1;

    // img taglarini find edib burada imgDom1.src = "https://...."
    // img taglarini find edib burada imgDom2.src = "https://...."
  } else if (me == 'w' && comp == 'e') {
    console.log('WIN');
    player1Point += 1;

    // img taglarini find edib burada imgDom1.src = "https://...."
    // img taglarini find edib burada imgDom2.src = "https://...."
  } else if (me == 'f' && comp == 'w') {
    console.log('WIN');
    player1Point += 1;
    // img taglarini find edib burada imgDom1.src = "https://...."
    // img taglarini find edib burada imgDom2.src = "https://...."
  } else if (me == comp) {
    console.log('DRAW - DRAW');
  } else {
    console.log('LOSE');
    player2Point += 1;

    // img taglarini find edib burada imgDom1.src = "https://...."
    // img taglarini find edib burada imgDom2.src = "https://...."
  }

  console.log(`ME: ${player1Point}`, me); //q
  console.log(`COMP: ${player2Point}`, comp); //e
  // DOM point divlerine innerHTML ile yazdirmaq.
  console.log('-------');
});
