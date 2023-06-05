import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor() { }
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
      // Validators.pattern('[[0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2}]'),
    ]),
    tripenddate: new FormControl('', [
      Validators.required,
      // Validators.pattern('[[0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2}]'),
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
      name: this.tripAddForm.get('tripname')!.value,
      country: this.tripAddForm.get('tripcountry')!.value,
      startdate: this.tripAddForm.get('tripstartdate')!.value,
      enddate: this.tripAddForm.get('tripenddate')!.value,
      price: this.tripAddForm.get('tripnoofplaces')!.value,
      noofplaces: this.tripAddForm.get('tripnoofplaces')!.value,
      shortdesc: this.tripAddForm.get('tripshortdesc')!.value,
      imagelink: this.tripAddForm.get('tripimagelink')!.value,
      quantity: 0,
      likes: 0,
      dislikes: 0,
      currency: 'zł'
    } as unknown as Trip
    this.formSubmitEvent.emit(newTrip)
    this.incorrect = false
    this.correct = true
    this.tripAddForm.reset();
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
