import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TripsComponent } from './trips/trips.component';
import { RatingComponent } from './rating/rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddtripComponent } from './addtrip/addtrip.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopbarComponent,
    TripsComponent,
    RatingComponent,
    AddtripComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
