const object1 = {
    name:'hallo',
    age:12,
    city:"tyumen",
};

Object.defineProperty(object1, 'property1', {
    value: 42,
    enumerable:true,
    writable: false
});

Object.defineProperty(object1, 'property2', {
    value: 42,
    writable: false
});

console.table(object1);
for (const key in object1) {
    console.log(key);
}
