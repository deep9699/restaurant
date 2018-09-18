import { Router,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { PastOrderDetailsComponent } from "./past-order-details/past-order-details.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AddDishComponent } from "./add-dish/add-dish.component";
import { AdminComponent } from "./admin/admin.component";
import { ManageDishComponent } from "./manage-dish/manage-dish.component";
import { ManageCusineComponent } from "./manage-cusine/manage-cusine.component";
import { UpdateDishComponent } from "./update-dish/update-dish.component";
import { AddCusineComponent } from "./add-cusine/add-cusine.component";
import { UpdateCusineComponent } from "./update-cusine/update-cusine.component";

const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'pastorder',component:PastorderComponent},
  {path:'past_order_details/:id',component:PastOrderDetailsComponent},
  {path:'newcustomer',component:SignUpComponent},
  {path:'adddish',component:AddDishComponent},
  {path:'admin',component:AdminComponent},
  {path:'dish',component:ManageDishComponent},
  {path:'cusine',component:ManageCusineComponent},
  {path:'update_dish/:id',component:UpdateDishComponent},
  {path:'add_cusine',component:AddCusineComponent},
  {path:'update_cusine/:id',component:UpdateCusineComponent}
];


export const routing=RouterModule.forRoot(arr);
