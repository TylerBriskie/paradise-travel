import { TripType } from '../models/TripType';

export const TripTypes: TripType[] = [
  {
    id: 0,
    name: 'Car',
    car: true,
    hotel: false,
    flight: false,
  },
  {
    id: 1,
    name: 'Hotel',
    car: false,
    hotel: true,
    flight: false,
  },
  {
    id: 2,
    name: 'Flight',
    car: false,
    hotel: false,
    flight: true,
  },
  {
    id: 3,
    name: 'Flight + Car',
    car: true,
    hotel: false,
    flight: true,
  },
  {
    id: 4,
    name: 'Flight + Hotel',
    car: false,
    hotel: true,
    flight: true,
  },
  {
    id: 5,
    name: 'Hotel + Car',
    car: true,
    hotel: true,
    flight: false,
  },
  {
    id: 6,
    name: 'Flight + Hotel + Car',
    car: true,
    hotel: true,
    flight: true,
  },
]
