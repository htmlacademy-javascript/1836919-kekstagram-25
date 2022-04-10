const getRandomNumber = (min, max) => {
  const absMax = Math.floor(Math.max(Math.abs(max), Math.abs(min)));
  const absMin = Math.ceil(Math.min(Math.abs(max), Math.abs(min)));
  const result = Math.random() * (absMax - absMin + 1) + absMin;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getRandomUniqueNumber = () => Math.floor(Math.random() * new Date());

// const checkStringLength = (value, maxLengthLine) => {
//   const stringValue = String(value);
//   return stringValue.length <= maxLengthLine;
// };

export {getRandomNumber, getRandomArrayElement, getRandomUniqueNumber};
