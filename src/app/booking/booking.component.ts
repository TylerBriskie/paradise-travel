import { Component, OnInit } from '@angular/core';
import { TripType } from '../core/models/TripType';
import { TripTypes } from '../core/mockData/TripTypes';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedTripType: TripType = TripTypes[0];
  tripTypes: TripType[] = TripTypes;
  carTypes = ['Economy', 'Luxury', 'SUV', 'Van'];
  cities = ['Denver', 'Dallas', 'Boston', 'San Francisco', 'Toronto', 'London','New York', 'Los Angeles', 'Tokyo', 'Hamburg', 'Cairo'];
  currentBooking: {
    startDate: string,
    endDate: string,
    origin: string,
    destination: string,
    adults: number,
    children: number,
    carType: string,
  };


  constructor() { }

  ngOnInit() {
    this.currentBooking = {
      startDate: "02/03/2020",
      endDate: "02/06/2020",
      origin: "Denver",
      destination: "London",
      adults: 0,
      children: 0,
      carType: 'Economy'

    }
  }

  selectTripType(type: TripType){
      this.selectedTripType = type;
  }

}
