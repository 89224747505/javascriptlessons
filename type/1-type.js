

const checkTypes = (...arg) => (strCompares) => {
    let result = false;
    let arrTypes = strCompares.split('/');
    arg.forEach((value, index) => {
        if (arrTypes[index] === 'string')
            (value.__proto__ === String.prototype)
                ? result = true
                : console.log(`Переменная ${index+1} не является строкой`);
        if (arrTypes[index] === 'number')
            (value.__proto__ === Number.prototype)
                ? result = true
                : console.log(`Переменная ${index+1} не является номером`);
        if (arrTypes[index] === 'array')
            (value.__proto__ === Array.prototype)
                ? result = true
                : console.log(`Переменная ${index+1} не является массивом`);
        if (arrTypes[index] === 'oblect')
            (value.__proto__ === Object.prototype)
                ? result = true
                : console.log(`Переменная ${index+1} не является объектом`);
    })
    return result;
}

console.log(checkTypes('1', 2, '3', {a:5}, [1,2,3])('string/number/string/object/array'));




