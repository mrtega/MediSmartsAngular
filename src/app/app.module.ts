import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './Auth/auth.module';
import { SharedModule } from './Shared/shared.module';
import { HomeModule } from './Home/home.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './Shared/Guards/auth.guard';
import { httpInterceptProviders } from './Shared/interceptors/interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HomeModule,
  ],
  providers: [
    AuthGuard,
    httpInterceptProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
