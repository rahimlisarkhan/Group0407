const Cookie = {
  // Cookie yaz (days — neçə gün saxlanılsın)
  set(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  },

  // Cookie oxu
  get(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) return value;
    }
    return null;
  },

  // Cookie sil
  remove(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  },
};

// İstifadə:
Cookie.set('username', 'Ali', 3);
console.log(Cookie.get('username')); // Ali
// Cookie.remove('username');
// console.log(Cookie.get('username')); // null
