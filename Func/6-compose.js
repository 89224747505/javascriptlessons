
const compose = (...fn) => x => fn.reverse().reduce((acc, f) => f(acc), x);

const sum = (a) => a + a;
const mul = (a) => a * a;

const result = compose(sum, mul, sum, mul);

console.log(result(4));
