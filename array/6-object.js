
const machine = (x, y) => {
    const obj = Object.create(null);
    obj.x = x;
    obj.y = y;
    obj.moveX = function(step) {
        this.x +=step
        return this;
    };
    obj.moveY = function(step) {
        this.y +=step
        return this;
    };
    obj.toString = function() {
        console.log(`Значение x=${this.x}, y=${this.y}`)
        return this;
    };
    return obj;
}

const volvo = machine(0, 0);

volvo.moveX(-1);
volvo.moveY(100);
volvo.moveY(-50).moveY(600);
volvo.moveX(100).moveX(200);
volvo.toString();