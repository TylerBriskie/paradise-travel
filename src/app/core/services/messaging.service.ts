import { Injectable } from '@angular/core';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  message1: Message = {
    status: "OK",
    text: "Hello"
  }
  message2: Message = {
    status: "Warning",
    text: "There was a problem creating your trip, please try again"
  }
  messages: Message[] = [ this.message1, this.message2];

  constructor() { }

  add(message: Message) {
    this.messages.push();
  }

  clear(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }
}
