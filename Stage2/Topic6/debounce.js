// Debounce: funksiya yalnız son çağırışdan `delay` ms sonra işə düşür
function debounce(fn, delay = 500) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// İstifadə nümunəsi
const getFilmleriGetir = debounce((value) => {
  console.log('Axtarılır:', value);
  // render edir htmle yazir... logic
}, 1000);

input.addEventListener('input', (e) => getFilmleriGetir(e.target.value));
