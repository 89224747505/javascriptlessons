'use strict';
let obj = {
  one:1,
  two:2,
  three:3,
  four:4,
  five:5
}

const iterate = (obj, callback) => {
  for (let key in obj) {
    callback(key,obj[key]);
  }
};

iterate(obj, (key, value)=> {console.log({key, value})})


module.exports = { iterate };
