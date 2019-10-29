import { Component, OnInit } from '@angular/core';
import { TripConfirmation } from '../core/models/TripConfirmation';
import { TripConfirmations } from '../core/mockData/TripConfirmations';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  //todo: replace this with service implementation

  trips: TripConfirmation[] = TripConfirmations;
  constructor() { }

  ngOnInit() {
  }

}
