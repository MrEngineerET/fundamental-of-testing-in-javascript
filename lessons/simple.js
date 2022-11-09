const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result = sum(3, 5);
let expected = 8;
if (expected !== result) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(8, 5);
expected = 3;
if (expected !== result) {
  throw new Error(`${result} is not equal to ${expected}`);
}
