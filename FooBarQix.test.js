const { describe, test, expect } = require("@jest/globals");
const { default: expect_2 } = require("expect");
const { translateNumByValues } = require("./FooBarQix");

describe("String should be evaluated", () => {
  test("should be divisible by 3, 5 and 7", () => {
    const value = "105";
    expect(translateNumByValues(value)).toBe("FooBarQix");
  });
  test("should not be divisible by 3, 5, or 7", () => {
    const value = "29";
    expect(translateNumByValues(value)).toBe("29");
  });
  test("should be divisible only by 3", () => {
    const value = "3";
    expect(translateNumByValues(value)).toBe("Foo");
  });
});
