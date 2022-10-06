const { describe, test, expect } = require("@jest/globals");
const { default: expect_2 } = require("expect");
const {
  translateNumByValues,
  replaceValue,
  checkIfStringContainsOnlyNum,
  removeAllDigitsFromString,
} = require("./FooBarQix");

describe("Chek if string is divisible by 3, 5 or 7", () => {
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

describe("Check if string containing 3 , 5 , 7 or 0", () => {
  test("should contain 0 and be replace by *", () => {
    const value = ["1", "0", "1"];
    expect(replaceValue(value)).toStrictEqual(["1", "*", "1"]);
  });
  test("should return arr with Foo, Bar, Qix and *", () => {
    const value = ["3", "5", "7", "0"];
    expect(replaceValue(value)).toStrictEqual(["Foo", "Bar", "Qix", "*"]);
  });
});

describe("Check if string contains only Number", () => {
  test("should not contain only Number", () => {
    const value = "123da1";
    expect(checkIfStringContainsOnlyNum(value)).toBeFalsy();
  });

  test("should contain only Numbers", () => {
    const value = "1231";
    expect(checkIfStringContainsOnlyNum(value)).toBeTruthy();
  });
});

describe("Check if all digits from string are removed", () => {
  test("should remove digits", () => {
    const value = "123Foo1";
    expect(removeAllDigitsFromString(value)).toBe("Foo");
  });
  test("should not remove anything", () => {
    const value = "BarFoo*";
    expect(removeAllDigitsFromString("BarFoo*")).toBe("BarFoo*");
  });
});
