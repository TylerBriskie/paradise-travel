import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryDetailComponent } from './itinerary-detail.component';

describe('ItineraryDetailComponent', () => {
  let component: ItineraryDetailComponent;
  let fixture: ComponentFixture<ItineraryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
