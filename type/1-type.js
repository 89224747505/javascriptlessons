
const strictFunction = function (st, num, arr, obj) {
    let go;
    (typeof st === 'string') ? go = true : go = false;
    console.log(go);
}


strictFunction('123',123,[1,2,3], {a:1, b:2, c:3});