const obj1 = function() {};
const obj2 = function() {};

const cl1 = new obj1();
const cl2 = new obj2();

console.log(cl1.__proto__ === cl2.__proto__);

