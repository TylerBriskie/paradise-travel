import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingComponent } from './booking/booking.component';
import { ItineraryComponent } from './itinerary/itinerary.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'book', component: BookingComponent },
  { path: 'itinerary', component: ItineraryComponent},
  { path: 'itinerary/:id', component: ItineraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
