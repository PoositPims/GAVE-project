const isEmpty = (value) => {
  return !value || !value.trim(); // หรือ value === ''
};

const isNumeric = (value) => {
  return !isNaN(value);
};

export { isEmpty, isNumeric };
