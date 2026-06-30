// Simple text utilities

// Capitalize the first letter of a string
function capitalize(str) {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}

// Make the whole string uppercase
function toUpper(str) {
  return str ? str.toUpperCase() : '';
}

// Make the whole string lowercase
function toLower(str) {
  return str ? str.toLowerCase() : '';
}

// Remove spaces from the start and end
function trim(str) {
  return str ? str.trim() : '';
}

// Reverse the characters in a string
function reverse(str) {
  if (!str) return '';
  return str.split('').reverse().join('');
}

// Count the number of words
function wordCount(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).length;
}

// Shorten a string and add "..." if it is too long
function truncate(str, max) {
  if (!str) return '';
  if (str.length <= max) return str;
  return str.slice(0, max) + '...';
}

// Convert "hello world" to "hello-world"
function slugify(str) {
  if (!str) return '';
  return str.toLowerCase().trim().replace(/\s+/g, '-');
}

// Examples:
// capitalize("hello")        -> "Hello"
// reverse("abc")             -> "cba"
// wordCount("one two three") -> 3
// truncate("hello world", 5) -> "hello..."
// slugify("Hello World")     -> "hello-world"
