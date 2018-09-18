import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule
   } from '@angular/material';
   import { MatFormFieldModule } from "@angular/material/form-field";

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
import { AddDishComponent } from './add-dish/add-dish.component';
import { AdminComponent } from './admin/admin.component';
import { ManageDishComponent } from './manage-dish/manage-dish.component';
import { UpdateDishComponent } from './update-dish/update-dish.component';
import { ManageCusineComponent } from './manage-cusine/manage-cusine.component';
import { AddCusineComponent } from './add-cusine/add-cusine.component';
import { UpdateCusineComponent } from './update-cusine/update-cusine.component';

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
    AddDishComponent,
    AdminComponent,
    ManageDishComponent,
    UpdateDishComponent,
    ManageCusineComponent,
    AddCusineComponent,
    UpdateCusineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    routing,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatMenuModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
