import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AvailabilityComponent } from './availability/availability.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path : 'availabilty', component : AvailabilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
