import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database'
import { first, map, Observable } from 'rxjs';
import { Trip } from './ITrip';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  trips: Observable<any[]>
  private nextId :number | undefined
  constructor(private db:AngularFireDatabase) {
    this.trips=this.db.list('Trips').valueChanges();
    this.db.list('Trips', ref=>ref.orderByChild('id').limitToLast(1)).valueChanges().subscribe((res: any[])=> {this.nextId=res[0]?.id+1})
   }

  getTrips() : Observable<any[]>{
    return this.trips
  }

  addTrip(trip:Trip){
    this.db.list('Trips').push({
      id: trip.id,
      Name: trip.name,
      Country: trip.country,
      StartDate: trip.startdate,
      EndDate: trip.enddate,
      Price: trip.price,
      NoOfPlaces: trip.noofplaces,
      ShortDesc: trip.shortdesc,
      ImageLink: trip.imagelink,
      SumOfOpinions: trip.sumofopinions,
      NoOfOpinions: trip.noofopinions,
      Currency: trip.currency,
      Region: trip.region,
      Flag: 0
    })
  }

  removeTrip(idx:number){
    this.db.list('Trips').snapshotChanges().subscribe((items:any)=>{
      for(let i of items){
        if(i.payload.val().id==idx){
          this.db.list('Trips').remove(i.payload.key)
        }
      }
    })
  }
  getNextid(){
    return this.nextId
  }

  getOrderHistory$(uid:string){
    return this.db.object('/orderhistory/' + uid).valueChanges();
  }
  
}
