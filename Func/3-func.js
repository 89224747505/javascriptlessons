const name = "hallo";

const obj = {
    min: (a, b) => a < b ? a : b,
    max: (a, b) => a > b ? a : b,
    [name]: (a, b) => a * b,
}

console.log(obj.min(1000,650));
console.log(obj.max(10,650));
obj.name = "hallo";
console.log(obj['hallo'](10,10));