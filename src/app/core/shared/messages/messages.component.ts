import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messagingService: MessagingService) { }

  ngOnInit() {
  }

  clear(id: string, message: Message){
    console.log('message: ', message);
    const node = document.getElementById(id);
    node.classList.add('animated', 'fadeOutRightBig')
    setTimeout(() => {
      this.messagingService.clear(message);

    }, 300)
  }
}
