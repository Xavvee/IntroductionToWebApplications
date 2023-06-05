import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FirebaseService } from '../firebase.service';
import {first} from 'rxjs'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public auth:AuthenticationService,
    public fb: FirebaseService
  ){}

  orderHistoryId: string[]=[]
  orderHistory: any|undefined
  trips:any[]=[]

  getTripsNames(orderId:string){
    let str:string=""
    for(let trip of this.orderHistory[orderId].items){
      for(let t of this.trips){
        if(t.id==trip){
          str+=t.name+",\n"

        }
      }
    }
    str=str.substring(0,str.length-2)
    return str
  }

  ngOnInit(): void {
    this.auth.getUserData().then(res=>{
      console.log(res)
    })
    this.fb.getOrderHistory$(this.auth.userData.uid).pipe(first()).subscribe((data:any)=>{
      if(data){
        this.orderHistoryId=Object.keys(data)
        this.orderHistory=data
      }
    })
    this.fb.getTrips().pipe(first()).subscribe((trips:any[])=>{
      this.trips=[]
      for(let t of trips){
        this.trips.push(trips[t])
      }
    })
  }
}
