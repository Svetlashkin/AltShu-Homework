let value1 = 3;
let value2 = 9;

let result = max(value1, value2);
function max(value1, value2) {
    if (value1 > value2) {
      return value1;
    } else {
      return value2;
    }
  }
console.log (result);