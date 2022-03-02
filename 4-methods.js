'use strict';

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  fucking(x, y, z, n) {
    return x + y + z + n;
  }
};

const arr = [];
for (let i in iface) {
  arr.push([i, iface[i].length]);
}

console.log(arr);
