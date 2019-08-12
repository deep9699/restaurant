import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { PastOrderDetailsComponent } from './past-order-details/past-order-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignFormDemoComponent } from './sign-form-demo/sign-form-demo.component';
import { CreditcardDirective } from './creditcard.directive';
import { Creditcard1Component } from './creditcard1/creditcard1.component';
import { AdminComponent } from './admin/admin.component';

import { MaterialModule } from './material.module';
import { ExtraaComponent } from './extraa/extraa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PastorderComponent,
    PastOrderDetailsComponent,
    SignUpComponent,
    SignFormDemoComponent,
    CreditcardDirective,
    Creditcard1Component,
    AdminComponent,
    ExtraaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
