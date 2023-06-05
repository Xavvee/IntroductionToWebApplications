import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FirebaseService } from '../firebase.service';
import { Trip } from '../ITrip';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  ngOnInit(): void {
    this.cart=this.cartService.getTrips()
  }
  cart: Trip[]=[]
  constructor(
    private cartService: CartService,
    public fb:FirebaseService,
    public router:Router
  ){
  }

  tripsSum():number{
    let sum=0
    for(var trip of this.cart){
      sum+=trip.price
    }
    return sum
  }

  orderAll() {
    if(this.cartService.trips.length<=0)
      return
    this.cartService.trips = [];
    this.router.navigate(['dishes']);
  }
  orderOne() {
    if(this.cartService.trips.length<=0)
      return
    this.cartService.trips = [];
    this.router.navigate(['dishes']);
  }
}
