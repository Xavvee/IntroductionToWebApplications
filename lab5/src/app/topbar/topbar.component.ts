import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{

  hamburgerOpened: boolean = false
  constructor(){}
  ngOnInit(): void {
    
  }

  hamburgerHandler(){
    this.hamburgerOpened = !this.hamburgerOpened
  }
}
