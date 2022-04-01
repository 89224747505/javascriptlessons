let obj = {
    one: "one",
    two: 2,
    three:{
        one:1,
        two:"two"
    }
}
console.time('Time');
Object.defineProperty(obj, "ChildFuck", {value:13});
console.timeEnd('Time');
console.log({obj});
console.dir({obj});
console.trace("Trace");
console.log(obj.ChildFuck);

