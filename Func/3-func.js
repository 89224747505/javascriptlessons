
const obj = {
    min: (a, b) => a < b ? a : b,
    max: (a, b) => a > b ? a : b,
}

console.log(obj.min(1000,650));
console.log(obj.max(10,650));