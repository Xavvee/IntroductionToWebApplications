import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-orderhist',
  templateUrl: './orderhist.component.html',
  styleUrls: ['./orderhist.component.css']
})
export class OrderhistComponent implements OnInit {
  constructor(public fb:FirebaseService){}
  orderHistoryIdx:string[]=[]
  orderHistory: any|undefined
  tripsArr: any[]=[]

  ngOnInit(): void {
    this.fb.getOrderHistory$
  }

  getDishNames(orderId: string){
    let str: string = ""
    for(let item of this.orderHistory[orderId].items){
      for(let t of this.tripsArr){
        if (t.id == item){
          str += t.Name + ", ";
          break;
        }
      }
    }
    str = str.substring(0, str.length-2);
    return str
}
}
