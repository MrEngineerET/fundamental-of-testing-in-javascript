const { sum, asyncSum, subtract, asyncSubtract } = require("../math");

test("sum adds numbers", () => {
  const result = sum(3, 5);
  const expected = 8;
  expect(result).toBe(expected);
});

test("sumAsync adds numbers", async () => {
  const result = await asyncSum(3, 5);
  const expected = 8;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(8, 5);
  const expected = 3;
  expect(result).toBe(expected);
});

test("asyncSubtract subtracts numbers", async () => {
  const result = await asyncSubtract(8, 5);
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

async function test(title, callback) {
  try {
    await callback();
    console.log("✔︎", title);
  } catch (error) {
    console.log("✘", title);
    console.log(error);
  }
}
