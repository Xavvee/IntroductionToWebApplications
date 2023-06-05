
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(){

  }

  @Output() newReviewEvent =new EventEmitter<review>();

  reviews: review[]=[]
  errorsArray: any[]=[]

  addReview=new FormGroup({
    nickname:new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    date: new FormControl('',[
      Validators.required
    ]),
    review: new FormControl('',[
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(500)
    ])
  })
  ngOnInit(): void {
    
  }

  submitForm(){
    let newReview=({
      nick:this.addReview.get('nickname')!.value,
      date:this.addReview.get('date')!.value,
      review: this.addReview.get('review')!.value
    }as review)
    this.newReviewEvent.emit(newReview)
    this.addReview.reset();
  }
}
interface review{
  nick: string;
  date:string
  review: string
}