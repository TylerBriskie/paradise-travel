import { Component, OnInit } from '@angular/core';
import {DpDatePickerModule} from 'ng2-date-picker'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedTripType: string;
  tripTypes = ['Car', 'Hotel', 'Flight', 'Flight + Car', 'Flight + Hotel', 'Hotel + Car', 'Flight + Hotel + Car'];
  carTypes = ['Economy', 'Luxury', 'SUV', 'Van'];
  currentBooking: {
    car: boolean,
    flight: boolean,
    hotel: boolean,
    startDate: string,
    endDate: string,
    origin: string,
    destination: string,
    adults: number,
    children: number,
    carType: string,
  }


  constructor() { }

  ngOnInit() {
  }

  selectTripType(type: any){
      this.selectedTripType = type;
  }

}
