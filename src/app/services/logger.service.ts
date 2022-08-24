import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messageList: string[] = [];

  log(message: string): void {
    debugger;
    this.messageList.push(message);
  }
}
