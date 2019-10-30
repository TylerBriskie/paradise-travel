import { Injectable } from '@angular/core';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  messages: Message[] = [];

  constructor() { }

  add(message: Message) {
    this.messages.push(message);
  }

  clear(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
