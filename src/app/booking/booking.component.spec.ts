import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { FormsModule } from '@angular/forms';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ BookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.currentBooking = {
      car: false,
      hotel: false,
      flight: false,
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to select a car', () => {
    component.toggleCar();
    expect(component.currentBooking.car).toBe(true);
  });

  it('should be able to select a flight', () => {
    component.toggleFlight();
    expect(component.currentBooking.flight).toBe(true);
  });

  it('should be able to select a hotel', () => {
    component.toggleHotel();
    expect(component.currentBooking.hotel).toBe(true);
  });
});
