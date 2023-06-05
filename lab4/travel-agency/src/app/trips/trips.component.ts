import { Component, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  constructor() { }

  trips: Trip[] = []

  ngOnInit(): void {
    console.log('działa')
    fetch('./assets/data/trips.json').then(res => res.json())
      .then(json => {
        console.log('działa')
        for (let i in json["Trips"]) {
          this.trips.push({
            name: json["Trips"][i]["Name"],
            country: json["Trips"][i]["Country"],
            startdate: json["Trips"][i]["StartDate"],
            enddate: json["Trips"][i]["EndDate"],
            price: json["Trips"][i]["Price"],
            noofplaces: json["Trips"][i]["NoOfPlaces"],
            shortdesc: json["Trips"][i]["ShortDesc"],
            imagelink: json["Trips"][i]["ImageLink"],
            quantity: 0,
            likes: json["Trips"][i]["Likes"],
            dislikes: json["Trips"][i]["Dislikes"],
            currency: json["Trips"][i]["Currency"]
          } as Trip)
        }
      });
  }

  getBookedQuantity(trips : Trip[]):number{
    let quantity=0;
    for(let trip of trips){
      quantity+=trip.quantity
    }
    return quantity
  }

  tripAdd(trip:Trip){
    if(trip.noofplaces!=0){
      trip.quantity+=1
      trip.noofplaces-=1
    }
  }
  tripRemove(trip:Trip){
    if(trip.quantity>0){
      trip.quantity-=1
      trip.noofplaces+=1
    }
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

  tripDeleter(trip:Trip){
    for(var i=0;i<this.trips.length;i++){
      if(this.trips[i]==trip){
        this.trips.splice(i,1)
        return
      }
    }
  }

  likesAndDislikes(trip:Trip,val:any){
    if(val==1){
      trip.likes+=1
    }
    else{
      trip.dislikes+=1
    }
  }

}


export interface Trip {
  name: string;
  country: string;
  startdate: string;
  enddate: string;
  price: number;
  noofplaces: number;
  shortdesc: string;
  imagelink: string;
  quantity: number;
  likes: number;
  dislikes: number;
  currency: string;
}