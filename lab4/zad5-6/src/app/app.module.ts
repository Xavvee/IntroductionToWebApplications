import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zad5Component } from './zad5/zad5.component';
import { Zad6MainComponent } from './zad6-main/zad6-main.component';
import { Zad6OutputComponent } from './zad6-output/zad6-output.component';
// import { FavActorComponent } from './fav-actor/fav-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    // FavActorComponent,
    Zad5Component,
    Zad6MainComponent,
    Zad6OutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
