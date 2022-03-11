
const rec = function (num) {
    console.log(num);
    if (num === 0) return 0;
    return num * rec(num-1);
}

console.log(rec(100));