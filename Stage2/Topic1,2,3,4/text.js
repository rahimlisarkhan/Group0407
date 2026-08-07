// Simple text utilities

const TextHelper = {
  // Capitalize the first letter of a string
  capitalize: function (str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
  },

  // Make the whole string uppercase
  toUpper: function (str) {
    return str ? str.toUpperCase() : '';
  },

  // Make the whole string lowercase
  toLower: function (str) {
    return str ? str.toLowerCase() : '';
  },

  // Remove spaces from the start and end
  trim: function (str) {
    return str ? str.trim() : '';
  },

  // Reverse the characters in a string
  reverse: function (str) {
    if (!str) return '';
    return str.split('').reverse().join('');
  },

  // Count the number of words
  wordCount: function (str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).length;
  },

  // Shorten a string and add "..." if it is too long
  truncate: function (str, max) {
    if (!str) return '';
    if (str.length <= max) return str;
    return str.slice(0, max) + '...';
  },

  // Convert "hello world" to "hello-world"
  slugify: function (str) {
    if (!str) return '';
    return str.toLowerCase().trim().replace(/\s+/g, '-');
  },
};

// Examples:
// capitalize("hello")        -> "Hello"
// reverse("abc")             -> "cba"
// wordCount("one two three") -> 3
// truncate("hello world", 5) -> "hello..."
// slugify("Hello World")     -> "hello-world"
