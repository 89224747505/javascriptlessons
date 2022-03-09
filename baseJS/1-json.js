
const myObject = {
    name: "Ivan",
    age: 25,
    sex: "male",
    born: 1984,
}

const s = JSON.stringify(myObject);
const newObject = JSON.parse(s);
console.log(s);
console.table(newObject);