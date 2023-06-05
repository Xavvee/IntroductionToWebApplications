import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'trips', component: TripsComponent},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
