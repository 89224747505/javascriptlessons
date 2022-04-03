let str = "ТЕКСТ/Приветsdfkjshdfkhsdkfhskd CУММА/100/200 ТЕКСТ/sdfgsdgfsdfgПока"
let arr = str.split(" ");

for (let item of arr) {
    let expression = item.split('/');
    if (expression[0] === 'ТЕКСТ') {
        console.log(expression[1]);
    }
    if (expression[0] === 'CУММА') {
        console.log('Сумма - ',expression[1],'+',expression[2],'=',Number(expression[1])+Number(expression[2]));
    }
}
let obj = {
    one:1,
    two:2,
    three:{
        one:1,
        two:2,
        three:{
            hallo() {
                console.log('hallo world');
            }
        }
    }
}

console.log(JSON.stringify(obj));
obj.three.three.hallo();