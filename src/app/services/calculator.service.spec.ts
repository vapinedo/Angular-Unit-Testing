import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const mockLoggerSvc = jasmine.createSpyObj("LoggerService", ["log"]);
    const calculator = new CalculatorService(mockLoggerSvc);
    let result = calculator.add(2, 3);
    expect(result).toBe(5);
    expect(mockLoggerSvc.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const mockLoggerSvc = jasmine.createSpyObj("LoggerService", ["log"]);
    const calculator = new CalculatorService(mockLoggerSvc);
    let result = calculator.subtract(4, 2);
    expect(result).toBe(2);
    expect(mockLoggerSvc.log).toHaveBeenCalledTimes(1);
  });
});
