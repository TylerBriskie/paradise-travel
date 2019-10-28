import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  selectedTripType: string;
  tripTypes = ['Car', 'Hotel', 'Flight', 'Flight + Car', 'Flight + Hotel', 'Hotel + Car', 'Flight + Hotel + Car'];
  currentBooking: {
    car: boolean,
    flight: boolean,
    hotel: boolean,
    startDate: Date,
    endDate: Date,
    origin: string,
    destination: string,
    adults: number,
    children: number,
  }


  constructor() { }

  ngOnInit() {
  }

  selectTripType(type: any){
      this.selectedTripType = type;
  }

}
