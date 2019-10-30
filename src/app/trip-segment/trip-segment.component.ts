import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trip-segment',
  templateUrl: './trip-segment.component.html',
  styleUrls: ['./trip-segment.component.scss']
})
export class TripSegmentComponent implements OnInit {
  type: string;

  constructor(private location: Location) { }

  ngOnInit() {
    if (this.location.path().includes('hotel')){
      this.type = "Hotel";
    } else if (this.location.path().includes('flight')){
      this.type = "Flight";
    } else if (this.location.path().includes('car')){
      this.type = "Car";
    }
  }



}
