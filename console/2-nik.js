let str = "1--2--3--4--5--6--7--1"
let arr = str.split("--")

let counter = 0;

while (counter < arr.length) {
    if (arr[counter] % 2) console.log(`${arr[counter]} - число нечетное`);
    else console.log(`${arr[counter]} - число четное`);
    counter++;
};

