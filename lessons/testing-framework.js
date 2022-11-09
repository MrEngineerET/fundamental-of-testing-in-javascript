const { sum, subtract } = require("../math");

test("sum adds numbers", () => {
  const result = sum(3, 5);
  const expected = 8;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(8, 5);
  const expected = 3;
  expect(result).toBe(expected);
});

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected)
        throw new Error(`${actual} is not equal to ${expected}`);
    },
  };
}

function test(title, callback) {
  try {
    callback();
    console.log("✔︎", title);
  } catch (error) {
    console.log("✘", title);
    console.log(error);
  }
}
