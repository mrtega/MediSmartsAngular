import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../Shared/Guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivateChild: [AuthGuard], children: [
      // {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
