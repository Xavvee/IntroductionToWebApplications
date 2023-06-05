import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-zad6-main',
  templateUrl: './zad6-main.component.html',
  styleUrls: ['./zad6-main.component.css']
})
export class Zad6MainComponent implements OnInit {
  constructor(private data:SharedService){

  }
  message1:string;
  message:string;
  ngOnInit(){
    this.data.currentMessage.subscribe((message: string)=>this.message=message)  
    this.data.currentMessage1.subscribe((message1: string)=>this.message1=message1)  
  }

  clickBasics(){
    this.data.changeMessageHead("Basics")
    this.data.changeMessage("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus et mollitia corporis. Natus consequuntur sed maiores dolorum voluptates at.")
  }

  clickComponents(){
    this.data.changeMessageHead("Components")
    this.data.changeMessage("With components you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.")
  }

  clickEvents(){
    this.data.changeMessageHead("Events")
    this.data.changeMessage("Events allow you to trigger code on demand!")
  }
}
