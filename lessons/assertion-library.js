const { sum, subtract } = require("../math");

let result = sum(3, 5);
let expected = 8;
expect(result).toBe(expected);

result = subtract(8, 5);
expected = 3;
expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error(`${result} is not equal to ${expected}`);
    },
    toBeEqual(expected) {
      /** */
    },
    toBeGreaterThan(expected) {
      /** */
    },
  };
}
