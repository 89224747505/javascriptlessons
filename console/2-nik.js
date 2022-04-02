// let str = "никита--ваня--петя--петрович"
// let arr = str.split("--");

let arr = {
    ert:1,
    sdf:123,
    sdfsd:'123213123',
}
console.log(arr);

// for (let value of arr) {
//     console.log(value);
// }

for (let key in arr) {
    console.log(arr[key]);
}