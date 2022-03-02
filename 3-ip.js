'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parseInt = [];
  ip.split('.').map(str => parseInt.push(Number(str)));
  const sum = (parseInt[0] << 10) << 8;
  console.log(sum);
};

ipToInt('10.0.0.1');

module.exports = {ipToInt};
