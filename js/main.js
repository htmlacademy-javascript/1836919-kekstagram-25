const getRandomNumber = (min, max) => {
  max = Math.abs(max);
  min = Math.abs(min);
  if (max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return Math.floor(Math.random() * (min - max + 1)) + max;
};

const getMaxLine = (value, maxLengthLine) => {
  value = String(value);
  if (value.length < maxLengthLine) {
    return true;
  }

  return false;
};

getRandomNumber(10, 20);
getMaxLine('Hello, World', 20);
