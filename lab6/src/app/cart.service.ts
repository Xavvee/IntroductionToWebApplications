import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Trip } from './ITrip';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  trips: Trip[] =[]
  cart: Trip[]=[];

  addToCart(trip: Trip){
    this.trips.push(trip);
  }

  removeFromCart(trip: Trip){
    this.trips.splice(this.trips.indexOf(trip),-1)
    this.trips=[...this.trips]
  }

  getTrips(){
    return this.trips;
  } 

  clearCart(){
    this.trips=[];
    return this.trips;
  }

  

  constructor(
  ) { }
}
