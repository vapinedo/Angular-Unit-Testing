import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {

  constructor(private loggerSvc: LoggerService) {}
  
  add(num1: number, num2: number): number {
    this.loggerSvc.log("Add operation has been called"); 
    return num1 + num2;
  }
  
  subtract(num1: number, num2: number): number {
    this.loggerSvc.log("Subtract operation has been called"); 
    return num1 -   num2;
  }
}
