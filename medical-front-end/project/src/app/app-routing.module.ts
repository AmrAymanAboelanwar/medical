import { HomeComponent } from './components/home/home.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';


const routes: Routes = [
  {path:"doctors",component:DoctorsComponent},
  {path:"doctor-details",component:DoctorDetailsComponent},
  { path: '',component:HomeComponent, pathMatch: 'full' },
  {path:"**",component:HomeComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})


export class AppRoutingModule { }
