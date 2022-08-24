import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let mockLoggerSvc: any;
  let calculator: CalculatorService;

  beforeEach(() => {
    console.log("Before Each");
    mockLoggerSvc = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(mockLoggerSvc);
  });

  it('should add two numbers', () => {
    console.log("Add");
    let result = calculator.add(2, 3);
    expect(result).toBe(5);
    expect(mockLoggerSvc.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log("Subtract");
    let result = calculator.subtract(4, 2);
    expect(result).toBe(2);
    expect(mockLoggerSvc.log).toHaveBeenCalledTimes(1);
  });
});
