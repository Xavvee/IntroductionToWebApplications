import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(){}
  @Input() triplikes=0
  @Input() tripdislikes=0
  @Output() ratioChange = new EventEmitter<number>();
  voted=false
  ratingApply(ans:string){
    if(this.voted){
      return
    }
    if(ans=="+"){
      this.ratioChange.emit(1)
    }
    else{
      this.ratioChange.emit(-1)
    }
    this.voted=true
  }

  
}
