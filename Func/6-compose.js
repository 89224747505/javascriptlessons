
const compose = (...arg) => {
    let prevFunction = arg.shift();
    console.log(prevFunction);
    arg.forEach(value => {
        console.log(value);
    })
}

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;

const result = compose(sum(1,2), mul(2,3), sum(3,4), mul(2,2));

console.log(result);
console.log(result);