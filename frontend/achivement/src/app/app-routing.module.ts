import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTargetComponent } from './components/add-target/add-target.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AboutComponent } from './components/about/about.component';
import { MyDetailsComponent } from './components/my-details/my-details.component';
import {ForgetPassworsComponent} from './components/forget-passwors/forget-passwors.component'

const routes: Routes = [
   {path:'', component:SignInComponent},
   {path:'addTarget', component:AddTargetComponent},
   {path:'homePage', component:HomePageComponent},
   {path:'signIn', component:SignInComponent},
   {path:'signUp', component:SignUpComponent},
   {path:'about', component:AboutComponent},
   {path:'about', component:AboutComponent},
   {path:'my-details', component:MyDetailsComponent},
   {path:'my-forget-passwors', component:ForgetPassworsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
