import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { TripSegmentComponent } from './trip-segment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { BookingComponent } from '../booking/booking.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { ItineraryComponent } from '../itinerary/itinerary.component';
import { ItineraryDetailComponent } from '../itinerary/itinerary-detail/itinerary-detail.component';


describe('TripSegmentComponent', () => {
  let component: TripSegmentComponent;
  let fixture: ComponentFixture<TripSegmentComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ BookingComponent, HomepageComponent, ItineraryComponent, ItineraryDetailComponent, TripSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(TripSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct type of trip segment based on URL', () => {
    location.go('/itinerary/hotel/22');
    expect(component.type).toBe('Hotel');
  });
});
