import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const loggerSvc = new LoggerService();
    const calculator = new CalculatorService(loggerSvc);
    let result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it('should subtract two numbers', () => {
    const loggerSvc = new LoggerService();
    const calculator = new CalculatorService(loggerSvc);
    let result = calculator.subtract(4, 2);
    expect(result).toBe(2);
  });
});
