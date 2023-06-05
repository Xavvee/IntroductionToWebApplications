import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
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
    public cartService: CartService,
    public fb:FirebaseService,
    private router:Router,
    public auth:AuthenticationService
  ){  
  }

  tripsSum():number{
    let sum=0
    for(var trip of this.cart){
      sum+=trip.price
    }
    return sum
  }

  clearAll() {
    if(this.cartService.trips.length<=0)
      return
    this.cartService.trips = [];
    this.router.navigate(['trips']);
  }

  orderOne() {
    if(this.cartService.trips.length<=0)
      return
    this.cartService.trips = [];
    this.router.navigate(['trips']);
  }

  order(){
    if(this.cartService.cart.length<=0){
      return
    }
    this.fb.pushOrder(this.getCartIdsOnly(), this.auth.userData.uid)
    window.alert('Zamówienie zostało złożone')
    this.cartService.cart=[]
    this.router.navigate(['trips'])
  }

  getCartIdsOnly():string[]{
    let arr:string[]=[]
    for(let thing of this.cartService.cart){
      arr.push(String(thing.id))
    }
    return arr
  }
}
