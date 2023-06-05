import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';
import { FirebaseService } from '../firebase.service';
import { Trip } from '../ITrip';

@Component({
  selector: 'app-managercontrols',
  templateUrl: './managercontrols.component.html',
  styleUrls: ['./managercontrols.component.css']
})
export class ManagercontrolsComponent implements OnInit{
  ngOnInit(): void {
    this.fb.getTrips().subscribe((change)=>{
      this.trips=[];
      for(let trip of change){
        this.trips.push({
          id: trip.id,
          name: trip.name,
          country: trip.country,
          startdate: trip.startdate,
          enddate: trip.enddate,
          price: trip.price,
          noofplaces: trip.noofplaces,
          shortdesc: trip.shortdesc,
          imagelink: trip.imagelink,
          quantity: trip.quantity,
          noofopinions: trip.noofopinions,
          sumofopinions: trip.sumofopinions,
          currency: trip.currency,
          region: trip.region,
          flag:trip.flag,
          prevval:trip.prevval,
        } as Trip);
      }
    })
  }

  constructor(
    public auth:AuthenticationService,
    public cart:CartService,
    private fb:FirebaseService,
  ){}
  trips: Trip[]=[]


  deleteTrip(idx:number){
    this.fb.removeTrip(idx)
  }

}
