import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TripsComponent } from './trips/trips.component';
import { RatingComponent } from './rating/rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddtripComponent } from './addtrip/addtrip.component';
import { CartComponent } from './cart/cart.component';
import { environment } from 'src/environments/environment';
import { CartService } from './cart.service';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { NotfoundComponent } from './notfound/notfound.component';
import { TripComponent } from './trip/trip.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderhistComponent } from './orderhist/orderhist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopbarComponent,
    TripsComponent,
    RatingComponent,
    AddtripComponent,
    CartComponent,
    NotfoundComponent,
    TripComponent,
    ReviewsComponent,
    OrderhistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
