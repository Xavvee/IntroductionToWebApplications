import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TripComponent } from './trip/trip.component';
import { AddtripComponent } from './addtrip/addtrip.component';
import { TripModifyComponent } from './trip-modify/trip-modify.component';
import { AdmincontrolsComponent } from './admincontrols/admincontrols.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ManagercontrolsComponent } from './managercontrols/managercontrols.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ManagerGuard } from './guards/manager.guard';
import { AdminGuard } from './guards/admin.guard';
import { LoginTwiceGuard } from './guards/login-twice.guard';
import { TripGuard } from './guards/trip.guard';

const routes: Routes = [
  {path: 'trips', component: TripsComponent},
  {path: '', component: HomepageComponent},
  {path: 'cart', component: CartComponent, canActivate:[AuthenticationGuard]},
  {path: 'notfound', component: NotfoundComponent},
  {path: 'trips/:id', component: TripComponent, canActivate:[TripGuard]},
  {path: 'addtrip', component:AddtripComponent},
  {path: 'manager/modify', component:TripModifyComponent, canActivate:[AuthenticationGuard,ManagerGuard]},
  {path: 'admin/modify:id', component:TripModifyComponent, canActivate:[AuthenticationGuard,AdminGuard]},
  {path: 'admin', component:AdmincontrolsComponent, canActivate:[AdminGuard]},
  {path: 'register', component:RegistrationComponent},
  {path: 'login', component:LoginComponent, canActivate:[LoginTwiceGuard]},
  {path: 'manager', component:ManagercontrolsComponent, canActivate:[ManagerGuard]},
  {path: 'dashboard', component:DashboardComponent, canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
