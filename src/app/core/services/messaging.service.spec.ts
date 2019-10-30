import { async, TestBed } from '@angular/core/testing';

import { MessagingService } from './messaging.service';
import { Message } from '../models/Message';

describe('MessagingService', () => {
  let service: MessagingService;
  const message1: Message = {
    status: "200",
    text: "Hello.",
  }
  const message2 = {
    status: "403",
    text: "Forbidden",
  } 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
    })
  }))

  beforeEach(() => {
    service = TestBed.get(MessagingService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an add method', () => {
    const service: MessagingService = TestBed.get(MessagingService);
    const serviceSpy = jasmine.createSpyObj('MessagingService', ['clear', 'add']);
    serviceSpy.add(message1);
    serviceSpy.add(message2);
    expect(serviceSpy.add).toHaveBeenCalledTimes(2);
  });

  it('should have a clear method', () => {
    const service: MessagingService = TestBed.get(MessagingService);
    const serviceSpy = jasmine.createSpyObj('MessagingService', ['clear', 'add']);
    serviceSpy.add(message1);
    serviceSpy.clear();
    expect(serviceSpy.clear).toHaveBeenCalledTimes(1);
  });
});
