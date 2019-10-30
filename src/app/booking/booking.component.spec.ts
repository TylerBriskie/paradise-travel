import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HomepageComponent } from '../homepage/homepage.component';
import { ItineraryComponent } from '../itinerary/itinerary.component';
import { Location } from '@angular/common';

import { routes } from '../app-routing.module';
import { Router } from '@angular/router';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [ BookingComponent, HomepageComponent, ItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(BookingComponent);
    router.initialNavigation();
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

  it('should not be able to submit without all three options selected', () => {
    component.toggleHotel();
    component.toggleCar();
    expect(component.canSubmit).toBe(false);
    component.toggleFlight();
    expect(component.canSubmit).toBe(true);
  })

  it('should redirect to the single trip view after booking a trip', fakeAsync(() => {
    component.toggleFlight();
    component.toggleHotel();
    component.toggleCar();
    component.submitBooking();
    tick(500);
    expect(location.path()).toContain('/itinerary/');
  }));
});
