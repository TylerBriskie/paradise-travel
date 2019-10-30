import { Component, OnInit } from '@angular/core';
import { TripConfirmation } from '../core/models/TripConfirmation';

import { TripService } from '../core/services/trip.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  //todo: replace this with service implementation

  trips: TripConfirmation[] = [];
  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrips().subscribe((trips) =>{
      this.trips = trips;
    })
  }

}
