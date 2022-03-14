
const machine = (x, y) => {
    const obj = Object.create(null);
    obj.x = x;
    obj.y = y;
    obj.moveX = (step) => (this.x +=step);
    obj.moveY = (step) => (this.y +=step);
    obj.toString = () => console.log(`Значение x=${this.x}, y=${this.y}`);
    return obj;
}

const volvo = machine(0, 0);

volvo.moveX(-1);
volvo.moveY(100);
volvo.toString();