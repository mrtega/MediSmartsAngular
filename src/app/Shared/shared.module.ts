import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { AddCommaPipe } from './pipes/add-comma.pipe';


@NgModule({
  declarations: [
    AddCommaPipe,
    TopBarComponent,
    NavbarComponent,
    DetailsDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    TopBarComponent,
    NavbarComponent,
    FormsModule,
    HttpClientModule,
  ]
})

export class SharedModule { }
