
const Context = function () {
    this.name = "Ivanus Zyranus";
    const city = {
        name: "Tyumen",
        funcname: this.name,
    }
    return city;
}

const cont = new Context();

console.log(cont);