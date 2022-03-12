const arr = ['A','B','C','D','E'];

let st = JSON.stringify(arr);

console.log(st);

const arr2 = JSON.parse(st);

console.log(arr2);

console.log(arr2.toString().replace(/,/g,''));