import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})
export class Zad5Component implements OnInit{
  constructor() { }

  model: string
  color: string
  company: string
  carData:any
  colorChoice:string[]

  displayCar=false
  displayColors=false
  displayModels=false
  displayCompanies=false

  ngOnInit(): void {
    fetch('./assets/zad5/cars.json').then(res => res.json())
    .then(json => {
      this.carData = json;
      this.displayCompanies=true;
    });
  }

  selectedCompany(){
    this.displayModels=true
    this.displayColors=false
    this.displayCar=false
  }


  selectedModel(){
    this.displayCar=false
    this.colorChoice = this.carData[this.company][this.model]
    this.displayColors=true
  }
  selectedColor(){
    this.displayCar=true;
  }


}
