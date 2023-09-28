import { z } from "zod";

const mathOperationSchema = z.object({
  num1: z.number(),
  num2: z.number(),
});

type mathOperation = z.infer<typeof mathOperationSchema>;

const sum = (values: mathOperation): number => {
  const { num1, num2 } = mathOperationSchema.parse(values);
  return num1 + num2;
};

const subtract = (values: mathOperation): number => {
  const { num1, num2 } = mathOperationSchema.parse(values);
  return num1 - num2;
};

const multiply = (values: mathOperation): number => {
  const { num1, num2 } = mathOperationSchema.parse(values);
  return num1 * num2;
};

const divide = (values: mathOperation): number => {
  const { num1, num2 } = mathOperationSchema.parse(values);
  return num1 / num2;
};

export { sum, subtract, multiply, divide };
