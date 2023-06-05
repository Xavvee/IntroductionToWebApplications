import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { Trip } from '../ITrip';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-modify',
  templateUrl: './trip-modify.component.html',
  styleUrls: ['./trip-modify.component.css']
})
export class TripModifyComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FirebaseService
  ) { }

  trip: any = null
  id: any = null
  subscription: Subscription | undefined

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
    })
    this.fb
      .getTrips()
      .pipe(first())
      .subscribe((trips: any[]) => {
        for (let t of trips) {
          if (t.id == this.id) {
            this.tripModifyForm.patchValue(t)
            break
          }
        }
      })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  tripModifyForm=new FormGroup({
    tripname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    tripcountry: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    tripstartdate: new FormControl('', [
      Validators.required,
      Validators.pattern('/^\d{2}\/\d{2}\/\d{4}$/'),
    ]),
    tripenddate: new FormControl('', [
      Validators.required,
      Validators.pattern("/^\d{2}\/\d{2}\/\d{4}$/"),
    ]),
    tripnoofplaces: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*'),
    ]),
    tripprice: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
    tripshortdesc: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    tripimagelink: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    tripregion: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  })

  showCorrect=false
  showIncorrect=false

  getValidatorsError(form:any){
    Object.keys(form.controls).forEach(key=>{
      const controlErrors: ValidationErrors=form.get(key).errors
      if(controlErrors!=null){
        Object.keys(controlErrors).forEach(keyError=>{
          console.log('Key control: '+', keyError:'+ keyError + ', err value: ', controlErrors[keyError])
        })
      }
    })
  }

  submitForm(){
    if(!this.tripModifyForm.valid){
      this.showIncorrect=true
      this.showCorrect=false
      return
    }
    this.fb
      .getTrips()
      .pipe(first())
      .subscribe((trips: any[])=>{
        let newTrip:any
        for( let trip of trips){
          if(trip.id ==this.id){
            newTrip=trip
            break
          }
        }
        let changedValues={
          name: this.tripModifyForm.get('tripname')!.value,
          country: this.tripModifyForm.get('tripcountry')!.value,
          startdate: this.tripModifyForm.get('tripstartdate')!.value,
          enddate: this.tripModifyForm.get('tripenddate')!.value,
          noofplaces: this.tripModifyForm.get('tripnoofplaces')!.value,
          price: this.tripModifyForm.get('tripprice')!.value,
          shortdesc: this.tripModifyForm.get('tripshortdesc')!.value,
          imagelink: this.tripModifyForm.get('tripimagelink')!.value,
          region: this.tripModifyForm.get('tripregion')!.value,
        }
        try{
          this.fb.updateTrip(changedValues,this.id)
        }
        catch(err){
          window.alert(err)
        }
        this.showCorrect=true
        this.showIncorrect=false
        this.tripModifyForm.reset()
      })
    this.router.navigate(['/manager/'])
  }
  
}
