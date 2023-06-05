import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { Trip } from '../ITrip';
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  constructor(private route:ActivatedRoute,
    private fb:FirebaseService){}

private subscription:Subscription|undefined

id: number = -1
trip: Trip[] = []
selected: number = 0
reviews: review[] = []

ngOnInit(): void {
  this.subscription=this.route.params.subscribe(params=>{
    this.id=params['id']
    this.fb.getTrips().pipe(first()).subscribe((trips:any[])=>{
      let trip:any
        for(let t of trips){
          if(t.id==this.id){
            trip=t
            break
          }
        }
        this.trip.push({
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
    })
  })
}
ngOnDestroy():void{
  if(this.subscription){
    this.subscription.unsubscribe()
  }
}

addReview(newReview:review){
  this.reviews.push(newReview)
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

}
interface review{
  nick:string,
  date:string,
  review:string
}