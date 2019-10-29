import { Component, OnInit } from '@angular/core';
import { TripType } from '../core/models/TripType';
import { TripTypes } from '../core/mockData/TripTypes';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  currentBooking: {
    car: boolean,
    flight: boolean,
    hotel: boolean,
  } = {
    car: false,
    flight: false,
    hotel: false
  };

  constructor() { }

  ngOnInit() {
  }

  toggleCar(){
      this.currentBooking.car = !this.currentBooking.car;
  }

  toggleFlight(){
    this.currentBooking.flight = !this.currentBooking.flight;

  }

  toggleHotel() {
    this.currentBooking.hotel = !this.currentBooking.hotel;
  }
}
