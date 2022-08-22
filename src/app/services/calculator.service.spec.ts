import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const calculator = new CalculatorService();
    let result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it('should subtract two numbers', () => {
    const calculator = new CalculatorService();
    let result = calculator.subtract(4, 2);
    expect(result).toBe(2);
  });
});
