import { Component, OnInit } from '@angular/core';
import '../../assets/selected.png';
import { MessagingService } from '../core/services/messaging.service';
import { Router } from '@angular/router';
import { TripService } from '../core/services/trip.service';
import { CarTypes} from '../core/mockData/CarTypes';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  canSubmit = false;
  carTypes = Object.keys(CarTypes).map(key => CarTypes[key]).filter(value => typeof value === 'string');
  flightTimes: string[] = [
    '7:00 A.M.', '10:00 A.M.', '12:30 P.M.', '3:00 P.M', '6:30 P.M.', '10:00 P.M',
  ];
  cities = ['Denver', 'Dallas', 'San Francisco', 'New York City', 'London', 'Rome', 'Paris', 'Tokyo'];
  currentBooking: {
    destination: string,
    car: boolean,
    carType: string,
    flight: boolean,
    flightTime: string,
    hotel: boolean,
    hotelRating: number,
  } = {
    destination: 'Tokyo',
    car: false,
    carType: 'Economy',
    flight: false,
    flightTime: '7:00 A.M.',
    hotel: false,
    hotelRating: 0,
  };

  constructor(
    private messagingService: MessagingService,
    private tripService: TripService,
    private router: Router) { }

  ngOnInit() {
  }

  toggleCar() {
      this.currentBooking.car = !this.currentBooking.car;
      this.checkEnableSubmit();
  }

  toggleFlight() {
    this.currentBooking.flight = !this.currentBooking.flight;
    this.checkEnableSubmit();
  }

  toggleHotel() {
    this.currentBooking.hotel = !this.currentBooking.hotel;
    this.checkEnableSubmit();
  }

  checkHotelRating(event) {
    console.log('event: ', event);
    this.currentBooking.hotelRating = event.newValue;
    console.log(this.currentBooking);
  }

  checkEnableSubmit() {
    if (this.currentBooking.car === true && this.currentBooking.flight === true && this.currentBooking.hotel === true){
      this.canSubmit = true;
    } else {
      this.canSubmit = false;
    }
  }

  submitBooking(){
    this.tripService.newTrip(this.currentBooking).subscribe((newTrip) => {
      this.messagingService.add({status: 'OK', text: 'Your trip was booked'});
      this.router.navigate([`/itinerary/${newTrip.id}`]);

    }, (error) =>{
      this.messagingService.add({status: 'Warning', text: 'There was an error booking your trip.'})
    });

  }
}
