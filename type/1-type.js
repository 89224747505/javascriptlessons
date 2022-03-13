
const strictFunction = function (st, num, arr, obj) {
    let s,n,a,o = false;
    (st.__proto__ === String.prototype) ? s = true : console.log('В st подставте строку');
    (num.__proto__ === Number.prototype) ? n = true : console.log('В num подставте число');
    (arr.__proto__ === Array.prototype) ? a = true : console.log('В arr подставте массив');
    (obj.__proto__ === Object.prototype) ? a = true : console.log('В obj подставте объект');
}


strictFunction('123',123,[1,2,3], {a:1, b:2, c:3});
strictFunction(1,'2',3,{a:4});

