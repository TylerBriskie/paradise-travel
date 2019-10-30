import { Component, OnInit } from '@angular/core';
import '../../assets/selected.png';
import { MessagingService } from '../core/services/messaging.service';
import { Router } from '@angular/router';
import { TripService } from '../core/services/trip.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  canSubmit: boolean = false;
  currentBooking: {
    car: boolean,
    flight: boolean,
    hotel: boolean,
  } = {
    car: false,
    flight: false,
    hotel: false
  };

  constructor(
    private messagingService: MessagingService, 
    private tripService: TripService,
    private router: Router) { }

  ngOnInit() {
  }

  toggleCar(){
      this.currentBooking.car = !this.currentBooking.car;
      this.checkEnableSubmit();
  }

  toggleFlight(){
    this.currentBooking.flight = !this.currentBooking.flight;
    this.checkEnableSubmit();
  }

  toggleHotel() {
    this.currentBooking.hotel = !this.currentBooking.hotel;
    this.checkEnableSubmit();
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
