class TextHelper {
  // Capitalize the first letter of a string
  static capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
  }

  // Make the whole string uppercase
  static toUpper(str) {
    return str ? str.toUpperCase() : '';
  }

  // Make the whole string lowercase
  static toLower(str) {
    return str ? str.toLowerCase() : '';
  }

  // Remove spaces from the start and end
  static trim(str) {
    return str ? str.trim() : '';
  }

  // Reverse the characters in a string
  static reverse(str) {
    if (!str) return '';
    return str.split('').reverse().join('');
  }

  // Count the number of words
  static wordCount(str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).length;
  }

  // Shorten a string and add "..." if it is too long
  static truncate(str, max) {
    if (!str) return '';
    if (str.length <= max) return str;
    return str.slice(0, max) + '...';
  }

  // Convert "hello world" to "hello-world"
  static slugify(str) {
    if (!str) return '';
    return str.toLowerCase().trim().replace(/\s+/g, '-');
  }
}
