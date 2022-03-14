const obj1 = function() {
    this.two = 8;
};
const obj2 = function() {};
obj1.prototype.one = function () {console.log("Hallo")};

const cl1 = new obj1();
const cl2 = new obj2();

console.log(cl1.__proto__ === obj1.prototype);

console.log(cl1.__proto__);
console.log(obj1.prototype);

const st ='hallo';

console.log(cl1.constructor.prototype);

