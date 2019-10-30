import { Component, OnInit } from '@angular/core';
import { ItineraryDetail } from 'src/app/core/models/ItineraryDetail';
import { TripService } from 'src/app/core/services/trip.service';

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrls: ['./itinerary-detail.component.scss']
})
export class ItineraryDetailComponent implements OnInit {
  itinerary: ItineraryDetail;
  constructor(private tripService: TripService) { }

  ngOnInit() {

    this.tripService.getTripDetail("101018").subscribe((itinerary) => {
      this.itinerary = itinerary;
    });
  }

}
