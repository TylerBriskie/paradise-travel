import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RatingModule } from 'ng-starrating';


import { BookingComponent } from './booking.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomepageComponent } from '../homepage/homepage.component';
import { ItineraryComponent } from '../itinerary/itinerary.component';
import { routes } from '../app-routing.module';
import { ItineraryDetailComponent } from '../itinerary/itinerary-detail/itinerary-detail.component';
import { TripSegmentComponent } from '../trip-segment/trip-segment.component';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes(routes), RatingModule],
      declarations: [ BookingComponent, HomepageComponent, ItineraryComponent, ItineraryDetailComponent, TripSegmentComponent ]
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
      destination: 'Tokyo',
      car: false,
      carType: 'Economy',
      flight: false,
      flightTime: '7:00 A.M.',
      hotel: false,
      hotelRating: 0,
    };
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

  it('should redirect to the single trip view after booking a trip', fakeAsync(() => {
    component.toggleFlight();
    component.toggleHotel();
    component.toggleCar();
    component.submitBooking();
    tick(500);
    expect(location.path()).toContain('/itinerary/');
  }));
});
