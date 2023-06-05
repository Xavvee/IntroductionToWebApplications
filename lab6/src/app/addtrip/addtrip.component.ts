import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { Trip } from '../ITrip';
@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(  private fb: FirebaseService ) { }
  @Output() formSubmitEvent = new EventEmitter<Trip>()
  tripAddForm = new FormGroup({
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
  });
  correct = false
  incorrect = false

  submitForm() {
    console.log(this.tripAddForm);
    console.log(this.tripAddForm.valid);
    if (!this.tripAddForm.valid) {
      this.incorrect = true
      return;
    }
    let newTrip = {
      id: this.fb.getNextid(),
      name: this.tripAddForm.get('tripname')!.value,
      country: this.tripAddForm.get('tripcountry')!.value,
      startdate: this.tripAddForm.get('tripstartdate')!.value,
      enddate: this.tripAddForm.get('tripenddate')!.value,
      //price: parseFloat(this.tripAddForm.get('tripnoofplaces')!.value),
      price: this.tripAddForm.get('tripnoofplaces')!.value,
      noofplaces: this.tripAddForm.get('tripnoofplaces')!.value,
      shortdesc: this.tripAddForm.get('tripshortdesc')!.value,
      // imagelink: newArray<string>(this.tripAddForm.get('tripimagelink')!.value),
      imagelink: this.tripAddForm.get('tripimagelink')!.value,
      quantity: 0,
      noofopinions: 0,
      sumofopinions: 0,
      currency: 'zł',
      region: this.tripAddForm.get('tripregion')!.value,
      flag: 0,
      prevval: 0
    } as unknown as Trip
    this.fb.addTrip(newTrip)
    this.incorrect = false
    this.correct = true
    this.tripAddForm.reset();
  }
}
