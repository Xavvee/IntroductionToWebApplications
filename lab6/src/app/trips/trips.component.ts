import { Component, ElementRef, OnInit, QueryList } from '@angular/core';
import { CartService } from '../cart.service';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../ITrip';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  constructor(
    private cartService: CartService, private fb:FirebaseService, private auth:AuthenticationService
  ) { }

  trips: any[] = []
  // cart: Trip[]=[]

  addToCart(trip:Trip){
    if(this.auth.siteRoles.client!=true){
      window.alert('Aby zamówić wycieczkę zaloguj się!')
      return
    }
    if(trip.noofplaces!=0){
      trip.quantity+=1
      trip.noofplaces-=1
      this.cartService.addToCart(trip)
    }
  }

  removeFromCart(trip:Trip){
    if(this.auth.siteRoles.client!=true){
      window.alert('Aby zamówić wycieczkę zaloguj się!')
      return
    }
    let idx = 0;
    for (let item of this.cartService.trips) {
      if (item.id == trip.id) {
        this.cartService.trips.splice(idx, 1);
        return;
      }
      idx += 1;
    }
  }

  tripsSub: Subscription|undefined

  
  ngOnInit(): void {
    console.log('działa')
    this.tripsSub=this.fb.getTrips().subscribe(change =>{
        console.log('działa')
        for (let trip of change) {
          this.trips.push({
            id: trip.id,
            name: trip.Name,
            country: trip.Country,
            startdate: trip.StartDate,
            enddate: trip.EndDate,
            price: trip.Price,
            noofplaces: trip.NoOfPlaces,
            shortdesc: trip.ShortDesc,
            imagelink: trip.ImageLink,
            quantity: 0,
            noofopinions: trip.NoOfOpinions,
            sumofopinions: trip.SumOfOpinions,
            currency: trip.Currency,
            region: trip.Region,
            flag: trip.Flag,
            prevval: 0
          } as Trip)
        }
      })
  }

  getBookedQuantity(trips : Trip[]):number{
    let quantity=0;
    for(let trip of trips){
      quantity+=trip.quantity
    }
    return quantity
  }

  getMaxPrice(trips:Trip[]):Trip{
    let maxi=-1
    let maxiTrip=<Trip>{}
    for(let trip of trips){
      if(trip.price>maxi){
        maxi=trip.price
        maxiTrip=trip
      }
    }
    return maxiTrip
  }

  getMinPrice(trips:Trip[]):Trip{
    let mini=100000
    let miniTrip=<Trip>{}
    for(let trip of trips){
      if(trip.price<mini){
        mini=trip.price
        miniTrip=trip
      }
    }
    return miniTrip
  }

  formSubmitAdder(trip:Trip){
    this.trips.push(trip)
  }

  // tripDeleter(idx:number){
  //   let index =this.cart.indexOf(this.trips[idx])
  //   while(index>=0){
  //     this.cart.splice(index,1);
  //     index=this.cart.indexOf(this.trips[idx])
  //   }
  //   this.fb.removeTrip(idx)
  // }

  tripDeleter(trip:Trip){
    return
    for(var i=0;i<this.trips.length;i++){
      if(this.trips[i]==trip){
        this.trips.splice(i,1)
        return
      }
    }
  }
  ratingApplier(trip:Trip,val:any){
    if(val==1){
      trip.sumofopinions=trip.sumofopinions-trip.prevval+1
      trip.prevval=1
    }
    else if(val==2){
      trip.sumofopinions=trip.sumofopinions-trip.prevval+2
      trip.prevval=2
    }
    else if(val==3){
      trip.sumofopinions=trip.sumofopinions-trip.prevval+3
      trip.prevval=3
    }
    else if(val==4){
      trip.sumofopinions=trip.sumofopinions-trip.prevval+4
      trip.prevval=4
    }
    else if(val==5){
      trip.sumofopinions=trip.sumofopinions-trip.prevval+5
      trip.prevval=5
    }
    if(trip.flag==0){
      trip.noofopinions+=1
      trip.flag=1
    }
  }

  createArray(n:number):any[]{
    return new Array(n)
  }

  getCartValue():number{
    let sum=0
    for (var trip of this.cartService.trips){
      sum+=trip.price
    }
    return sum
  }

  getOrderedQuantity(trip:Trip[]):number{
    return this.cartService.trips.length
  }


  getNumberOfBooked(trip:Trip){
    let cnt = 0;
    for (let item of this.cartService.trips) {
      if (trip.id == item.id) cnt += 1;
    }
    return cnt;
  }

  alertLogIn() {
    if (!this.auth.siteRoles.client){
      window.alert('Dostępne tylko dla zalogowanych');
      return
    }
  }
}


