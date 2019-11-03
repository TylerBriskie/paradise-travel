import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingComponent } from './booking/booking.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { MessagesComponent } from './core/shared/messages/messages.component';
import { TripSegmentComponent } from './trip-segment/trip-segment.component';
import { ItineraryDetailComponent } from './itinerary/itinerary-detail/itinerary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    BookingComponent,
    ItineraryComponent,
    MessagesComponent,
    TripSegmentComponent,
    ItineraryDetailComponent
  ],
  imports: [
    RatingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
