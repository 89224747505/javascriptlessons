'use strict';

const store = number => {
  let data = number;
  return (numSec) => {
    if (typeof numSec !== "undefined") {
      data += numSec;
      return store;
    } else return data;
  }
};

const read = store(10);
read(5);
read(1);
read(523);
const value2 = read();
console.log(value2);

module.exports = { store };
