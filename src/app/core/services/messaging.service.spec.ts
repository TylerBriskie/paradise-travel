import { TestBed } from '@angular/core/testing';

import { MessagingService } from './messaging.service';
import { Message } from '../models/Message';

describe('MessagingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagingService = TestBed.get(MessagingService);
    expect(service).toBeTruthy();
  });

  it('should have an add method', () => {
    const service: MessagingService = TestBed.get(MessagingService);
    const serviceSpy = jasmine.createSpyObj('MessagingService', ['clear', 'add']);
    serviceSpy.add('hi');
    serviceSpy.add('another message');
    expect(serviceSpy.add).toHaveBeenCalledTimes(2);
    expect(service.messages.length).toEqual(2);
  });

  it('should have a clear method', () => {
    const service: MessagingService = TestBed.get(MessagingService);
    const serviceSpy = jasmine.createSpyObj('MessagingService', ['clear', 'add']);
    serviceSpy.add('hi');
    serviceSpy.add('another message');
    expect(service.messages.length).toEqual(2);
    // why doesn't this pass?
    serviceSpy.clear();
    expect(serviceSpy.clear).toHaveBeenCalledTimes(1);
    expect(service.messages.length).toEqual(0);
  });
});
