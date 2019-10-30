import { Injectable } from '@angular/core';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  messages: Message[] = [];

  constructor() { }

  add(message: Message) {
    this.messages.push();
  }

  clear() {
    this.messages = [];
  }
}
