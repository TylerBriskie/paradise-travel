import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { Message } from '../../models/Message';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  const message1: Message = {status: 'OK', text: "Message 1"}
  const message2: Message = {status: 'OK', text: "Message 2"}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    component.messagingService.add(message1)
    component.messagingService.add(message2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a clear button to remove messages from the screen', fakeAsync(() => {
    expect(component.messagingService.messages.length).toBe(2);
    component.clear('1', message1);
    tick(500);
    expect(component.messagingService.messages.length).toBe(1);
  }));
});
