import { describe, test, expect } from "vitest";
import { subtract, sum, divide, multiply } from "..";

describe("Index.ts", () => {
  test("Sum", () => {
    const result = sum({ num1: 1, num2: 2 });
    expect(result).toBe(3);
  });
  test("Subtract", () => {
    const result = subtract({ num1: 3, num2: 2 });
    expect(result).toBe(1);
  });
  test("Multiply", () => {
    const result = multiply({ num1: 3, num2: 2 });
    expect(result).toBe(6);
  });
  test("Divide", () => {
    const result = divide({ num1: 6, num2: 2 });
    expect(result).toBe(3);
  });
});
