import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RatingModule } from 'ng-starrating';

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
      imports: [RouterTestingModule.withRoutes(routes), FormsModule, RatingModule],
      declarations: [ BookingComponent, HomepageComponent, ItineraryComponent, ItineraryDetailComponent, TripSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(TripSegmentComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
