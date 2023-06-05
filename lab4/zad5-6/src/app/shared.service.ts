import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject<string>("");
  private messageSource1 = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();
  currentMessage1 = this.messageSource1.asObservable();
  constructor(){

  }
  changeMessage(message :string){
    this.messageSource.next(message)
  }
  changeMessageHead(message1:string){
    this.messageSource1.next(message1)
  }
}
