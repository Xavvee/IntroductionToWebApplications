import { Component, EventEmitter, Input, OnInit, Output, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../ITrip';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(){
    this.ratingArr=Array(this.starCount).fill(false);
  }
  @Input() tripnoofopinions=0
  @Input() tripsumofopinions=0
  @Output() ratioChange = new EventEmitter<number>();
  voted=false
  prevVote=0
  rating=0;
  starCount=5;
  ratingArr:boolean[]=[]
  num=0
  i=0
  calculateScore(){
    this.num=this.tripsumofopinions/this.tripnoofopinions
    return this.num.toFixed(2);
  }

  returnStar(i:number){
    if(this.rating>=i+1){
      return 'star';
    }
    else{
      return 'star_border';
    }
  }

  ratingApply(i:number){
    this.rating=i+1;
    if(this.voted){
      if(this.rating==1 && this.prevVote!=1){
        this.ratioChange.emit(1)
        this.tripsumofopinions=this.tripsumofopinions-this.prevVote+1
        this.prevVote=1
      }
      else if (this.rating==2 && this.prevVote!=2){
        this.ratioChange.emit(2)
        this.tripsumofopinions=this.tripsumofopinions-this.prevVote+2
        this.prevVote=2
      }
      else if (this.rating==3 &&this.prevVote!=3){
        this.ratioChange.emit(3)
        this.tripsumofopinions=this.tripsumofopinions-this.prevVote+3
        this.prevVote=3
      }
      else if (this.rating==4 && this.prevVote!=4) {
        this.ratioChange.emit(4)
        this.tripsumofopinions=this.tripsumofopinions-this.prevVote+4
        this.prevVote=4
      }
      else if (this.rating==5 &&this.prevVote!=5){
        this.ratioChange.emit(5)
        this.tripsumofopinions=this.tripsumofopinions-this.prevVote+5
        this.prevVote=5 
      }
      return
    }
    if(this.rating==1){
      this.prevVote=1
      this.ratioChange.emit(1)
      this.tripsumofopinions+=1
    }
    else if (this.rating==2){
      this.prevVote=2
      this.ratioChange.emit(2)
      this.tripsumofopinions+=2
    }
    else if (this.rating==3){
      this.prevVote=3
      this.ratioChange.emit(3)
      this.tripsumofopinions+=3
    }
    else if (this.rating==4) {
      this.prevVote=4
      this.ratioChange.emit(4)
      this.tripsumofopinions+=4
    }
    else if (this.rating==5){
      this.prevVote=5
      this.ratioChange.emit(5)
      this.tripsumofopinions+=5
    }
    this.voted=true
  }


}


