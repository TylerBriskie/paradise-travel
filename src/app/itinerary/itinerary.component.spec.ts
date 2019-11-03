import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';

import { ItineraryComponent } from './itinerary.component';
import { routes } from '../app-routing.module';
import { BookingComponent } from '../booking/booking.component';
import { TripSegmentComponent } from '../trip-segment/trip-segment.component';
import { ItineraryDetailComponent } from './itinerary-detail/itinerary-detail.component';
import { HomepageComponent } from '../homepage/homepage.component';


describe('ItineraryComponent', () => {
  let component: ItineraryComponent;
  let fixture: ComponentFixture<ItineraryComponent>;
  let router: Router;
  let location: Location

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), RatingModule, FormsModule],
      declarations: [ BookingComponent, HomepageComponent, ItineraryComponent, ItineraryDetailComponent, TripSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
