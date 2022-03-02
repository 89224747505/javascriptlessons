'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const random = (min = 0, max) => {
  while (true) {
    const num = Math.floor(Math.random() * (max + 1));
    if (num >= min) return num;
  }
};

const generateKey = (length, possible) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const rNumber = random(0, possible.length);
    result += possible.slice(rNumber, rNumber + 1);
  }
  return result;
};

console.log(generateKey(5, characters));


module.exports = {generateKey};
