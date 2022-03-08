
class Summator {
    constructor(arg1 = 0, arg2 = 0) {
        this.arg1 = arg1;
        this.arg2 = arg2;
       }

    mul() {
       return this.result = this.arg1*this.arg2;
    }

    sum() {
        return this.result = this.arg1+this.arg2;
    }

    set arg(value) {
        this.arg1 = value;
    }
}

const sum = new Summator(10, 3);
sum.arg=500;
console.log(sum.mul());
console.log(sum.sum());