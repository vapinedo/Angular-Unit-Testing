import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messageList: string[] = [];

  log(message: string): void {
    this.messageList.push(message);
  }
}
