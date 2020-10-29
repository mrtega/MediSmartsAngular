import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { BaseAuthComponent } from './Auth/base-auth/base-auth.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { AuthGuard } from './Shared/Guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivateChild: [AuthGuard], children: [
      {path: '', component: DashboardComponent}
    ]
  },
  {
    path: '', component: BaseAuthComponent, children: [
      { path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
