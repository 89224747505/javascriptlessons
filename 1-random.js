'use strict';

const random = (min = 0, max) => {
  while (true) {
    const rand$f = Math.random();
    const num = Math.floor(rand$f * (max + 1));
    if (num >= min) return num;
  }
};
module.exports = {random};
