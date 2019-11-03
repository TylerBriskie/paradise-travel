import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from "@angular/forms";
import { RatingModule } from "ng-starrating";

import { ItineraryDetailComponent } from './itinerary-detail.component';
import {routes} from '../../app-routing.module';

import {HomepageComponent} from '../../homepage/homepage.component';
import {ItineraryComponent} from '../itinerary.component';
import {BookingComponent} from '../../booking/booking.component';
import {TripSegmentComponent} from '../../trip-segment/trip-segment.component';

describe('ItineraryDetailComponent', () => {
  let component: ItineraryDetailComponent;
  let fixture: ComponentFixture<ItineraryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), FormsModule, RatingModule],
      declarations: [ HomepageComponent, ItineraryComponent, BookingComponent, TripSegmentComponent, ItineraryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
