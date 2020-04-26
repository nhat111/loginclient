import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';



const routes: Routes = [
{path:"login", component:SigninComponent},
{path:"signup", component:SignupComponent},
{path:"profile", component:ProfileComponent}
     ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
