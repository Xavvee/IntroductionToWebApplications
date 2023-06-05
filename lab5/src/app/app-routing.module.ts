import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TripComponent } from './trip/trip.component';
import { AddtripComponent } from './addtrip/addtrip.component';

const routes: Routes = [
  {path: 'trips', component: TripsComponent},
  {path: '', component: HomepageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: 'trips/:id', component: TripComponent},
  {path: 'addtrip', component:AddtripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
