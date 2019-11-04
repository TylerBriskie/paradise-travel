import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {RatingModule} from 'ng-starrating';

import {HomepageComponent} from './homepage/homepage.component';
import {BookingComponent} from './booking/booking.component';
import {ItineraryComponent} from './itinerary/itinerary.component';
import {ItineraryDetailComponent} from './itinerary/itinerary-detail/itinerary-detail.component';
import {TripSegmentComponent} from './trip-segment/trip-segment.component';
import {FormsModule} from '@angular/forms';
import {routes} from './app-routing.module';

describe('Router App', () => {
  let fixture;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), FormsModule, RatingModule],
      declarations: [BookingComponent, HomepageComponent,  ItineraryComponent, ItineraryDetailComponent, TripSegmentComponent]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(HomepageComponent);
    router.initialNavigation();
  }));

  it('navigate to "" redirects to /home ', fakeAsync (() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));
});
