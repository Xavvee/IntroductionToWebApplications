import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-zad6-output',
  templateUrl: './zad6-output.component.html',
  styleUrls: ['./zad6-output.component.css']
})
export class Zad6OutputComponent implements OnInit{

  message:string;
  message1:string
  constructor(private data:SharedService){}


  ngOnInit(){
    this.data.currentMessage.subscribe((message: string)=>this.message=message)  
    this.data.currentMessage1.subscribe((message1: string)=>this.message1=message1)  
  }

}
