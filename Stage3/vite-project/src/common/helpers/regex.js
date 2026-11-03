export const isEmail = (str) => {
  const emailRegex =
    /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  const result = emailRegex.test(str);

  return result;
};

export const isURL = (str) => {
  const urlRegex = /^https?:\/\/([\w-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
  const result = urlRegex.test(str);

  return result;
};

export const isAzePhone = (str) => {
  const cleaned = str.replace(/[\s()-]/g, '');
  const azePhoneRegex = /^(\+994|994|0)(10|12|50|51|55|60|70|77|99)\d{7}$/;
  const result = azePhoneRegex.test(cleaned);

  return result;
};

export const isPasswordCheck = (str) => {
  // (?=.*[A-Z])        -> at least 1 uppercase letter
  // (?=.*[a-z])        -> at least 1 lowercase letter
  // (?=.*\d)           -> at least 1 digit
  // (?=.*[^A-Za-z0-9]) -> at least 1 symbol
  // .{8,}              -> at least 8 characters
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  const result = passwordRegex.test(str);

  return result;
};
