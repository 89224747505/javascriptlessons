const Machine = function (name) {
    this.x = 0;
    this.y = 0;
    this.name = name;
}

Machine.prototype.right = function (step) {
    this.x +=step;
    return this;
}

Machine.prototype.info = function () {
    console.log(this.name,'-',this.x,'-',this.y);
}

let volvo = new Machine("Volvo");

volvo.right(5);

volvo.right(1).right(2).right(2);

volvo.info();
