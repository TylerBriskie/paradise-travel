import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingComponent } from './booking/booking.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { TripSegmentComponent } from './trip-segment/trip-segment.component';
import { ItineraryDetailComponent } from './itinerary/itinerary-detail/itinerary-detail.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'book', component: BookingComponent },
  { path: 'itinerary', component: ItineraryComponent},
  { path: 'itinerary/:id', component: ItineraryDetailComponent },
  { path: 'itinerary/flight/:id', component: TripSegmentComponent},
  { path: 'itinerary/hotel/:id', component: TripSegmentComponent},
  { path: 'itinerary/car/:id', component: TripSegmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
