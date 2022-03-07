
const myFunction = (...func) => (func.reduce((f1, f2) => f1 + f2));

const add = ( x, y ) => (x+y);

console.log(myFunction(add(1,1), add(1,1), add(1,1)));