const getRandomNumber = (min, max) => {
  const absMax = Math.abs(max);
  const absMin = Math.abs(min);
  if (absMax > absMin) {
    return Math.floor(Math.random() * (absMax - absMin + 1)) + absMin;
  }

  return Math.floor(Math.random() * (absMin - absMax + 1)) + absMax;
};

const checkStringLength = (value, maxLengthLine) => {
  const stringValue = String(value);
  return stringValue.length < maxLengthLine;
};

getRandomNumber(10, 13);
checkStringLength('Hello, World', 20);
