
const House = function (floor, flats) {
    this.floor = floor;
    this.flats = flats;
    this.garbage = true;
}

House.prototype.clean = function () {
    console.log("Мусор убран");
    this.garbage = false;
    return this;
}

House.prototype.party = function () {
    console.log("Прошла вечеринка");
    this.garbage = true;
    return this;
}
const func = function () {
    console.log("Закупились")
    return this;
}

const myHouse = new House(10, 100).clean().party().clean();
myHouse["shop"] = func;

console.log(myHouse.shop());