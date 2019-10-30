import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { TripConfirmations } from '../mockData/TripConfirmations';
import { TripConfirmation } from '../models/TripConfirmation';
import { Observable } from 'rxjs';
import { ItineraryDetail } from '../models/ItineraryDetail';
import { MockItineraryDetails } from '../mockData/ItineraryDetails';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor() { }

  newTrip(booking: object): Observable<TripConfirmation>{
    console.log('booking...', booking);
    setTimeout(() => {
      
    }, 400);
    return  Observable.create( observer => {
      observer.next(TripConfirmations[0]);
      observer.complete();
    })
  }

  getTrips(): Observable<TripConfirmation[]> {
    return Observable.create( observer => {
      observer.next(TripConfirmations);
      observer.complete();
    })
  }

  getTripDetail(id: string): Observable<ItineraryDetail> {
    return Observable.create( observer => {
      observer.next(MockItineraryDetails);
      observer.complete();
    })
  }
  
}
