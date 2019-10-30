import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSegmentComponent } from './trip-segment.component';

describe('TripSegmentComponent', () => {
  let component: TripSegmentComponent;
  let fixture: ComponentFixture<TripSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
