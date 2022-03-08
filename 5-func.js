
const myFunction = (...func) => (func.reduce((f1, f2) => f1 + f2));

const add = ( x, y ) => (x+y);

console.log(myFunction(add(1,1), add(1,1), add(1,1)));

const loop = (min, max, callback) => {
    for ( let i = 0; i < max ; i++ ) callback(i);
}

loop(0, 10, (i) => {
    console.log("This number is - ", i);
})