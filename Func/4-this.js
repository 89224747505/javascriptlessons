
const Context = function () {
    this.name = "Ivanus Zyranus";
    const city = {
        name: "Tyumen",
        setName:(value) => this.name = value,
        getName:this.name,
    }
    return city;
}

const cont = new Context();
console.log(cont.getName);
cont.setName("Hallo");
console.log(cont.getName);
console.log(cont.name);

(function f1() {
    console.log("hallo")
})();