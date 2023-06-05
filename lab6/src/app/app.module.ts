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
import { CartService } from './cart.service';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { NotfoundComponent } from './notfound/notfound.component';
import { TripComponent } from './trip/trip.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OrderhistComponent } from './orderhist/orderhist.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
// import { GuardsComponent } from './guards/guards.component';
import { AdmincontrolsComponent } from './admincontrols/admincontrols.component';
import { ManagercontrolsComponent } from './managercontrols/managercontrols.component';
import { TripModifyComponent } from './trip-modify/trip-modify.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { DashboardComponent } from './dashboard/dashboard.component';


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
    OrderhistComponent,
    RegistrationComponent,
    LoginComponent,
    // GuardsComponent,
    AdmincontrolsComponent,
    ManagercontrolsComponent,
    TripModifyComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
