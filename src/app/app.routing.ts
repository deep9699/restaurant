import { Router,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { PastOrderDetailsComponent } from "./past-order-details/past-order-details.component";

const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'pastorder',component:PastorderComponent},
  {path:'past_order_details/:id',component:PastOrderDetailsComponent}
];


export const routing=RouterModule.forRoot(arr);
