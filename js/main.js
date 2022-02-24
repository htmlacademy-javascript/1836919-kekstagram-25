'use strict'

let getRandomNumber = (min, max) => {
  max = Math.abs(max);
  min = Math.abs(min);
  if (max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return Math.floor(Math.random() * (min - max + 1)) + max;
}

let getMaxLine = (value, maxLengthLine) => value.length < maxLengthLine ? true : false;

getRandomNumber(10, 20);
getMaxLine('Привет, мир!', 20);
