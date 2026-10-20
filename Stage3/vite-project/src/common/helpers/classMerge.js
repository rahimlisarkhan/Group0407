export const classMerge = (...classNames) => {
  return classNames.filter((item) => item).join(' ');
};
