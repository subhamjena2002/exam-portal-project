import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './component/all/all.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './contact/contact.component';


import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {
    path: 'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path: 'signin',
    component:SigninComponent,
    pathMatch:'full',
  },
  {
    path: 'home',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path: 'contact',
    component:ContactComponent,
    pathMatch:'full',
  },
  {
    path: 'about',
    component:AboutComponent,
    pathMatch:'full',
  },
  {
    path: 'all',
    component:AllComponent,
    pathMatch:'full',
  }
  
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
