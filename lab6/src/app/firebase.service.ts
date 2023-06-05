import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database'
import { first, map, Observable, firstValueFrom } from 'rxjs';
import { Trip } from './ITrip';
import { Roles, User } from './IUser';

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
  

  getUserRole$(uid: string) {
    return this.db.object('/users/' + uid + '/roles').valueChanges();
  }


  async getUserRole(uid:string){
    return firstValueFrom(
      this.db.object('/users/' + uid + '/roles').valueChanges()
    );
  }

  pushOrder(orders:string[],uid:string){
      try{
        this.db.list('/orderhistory/'+uid).push({orders:orders,date:new Date().toLocaleDateString()})
      }
      catch(error){
        window.alert(error)
      }
  }

  getUsers(){
    return this.db.list('users').snapshotChanges();
  }

  changeUserRole(uid: string, role: string, value: string) {
    let change = '{"' + role + '"' + ':' + value + '}';
    this.db.object('/users/' + uid + '/roles').update(JSON.parse(change));
  }

  addNewUser(user:User){
    this.db.object('/users/'+user.uid).set({
      email:user.email,
      roles:user.roles,
      
    })
  }


  updateTrip(data: any, ids:string){
    this.db.list('Trips').snapshotChanges().pipe(first()).subscribe((items: any) => {
      for (let i of items) {
        if (i.payload.val().id == ids) {
          this.db.list('Trips').update(i.payload.key, data)
        }
      }
    });
  }
}
