const object1 = {
    name:'hallo',
};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
});

console.table(object1);