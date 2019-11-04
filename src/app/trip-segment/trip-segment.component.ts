import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trip-segment',
  templateUrl: './trip-segment.component.html',
  styleUrls: ['./trip-segment.component.scss']
})
export class TripSegmentComponent implements OnInit {
  type: string;
  id: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.type = this.route.snapshot.data.type;
  }



}
