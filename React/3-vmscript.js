const vm = require('vm');

const script = new vm.Script(`
function add(a, b) {
  return a + b;
}

const x = add(1, 2);
console.log(x);
`);

const cacheWithoutX = script.createCachedData();

script.runInThisContext();

const cacheWithX = script.createCachedData();