import { Router,RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PastorderComponent } from './pastorder/pastorder.component';
import { PastOrderDetailsComponent } from "./past-order-details/past-order-details.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AddDishComponent } from "./manage-dish/add-dish/add-dish.component";
import { AdminComponent } from "./admin/admin.component";
import { ManageDishComponent } from "./manage-dish/manage-dish.component";
import { ManageCusineComponent } from "./manage-cusine/manage-cusine.component";
import { UpdateDishComponent } from "./manage-dish/update-dish/update-dish.component";
import { AddCusineComponent } from './manage-cusine/add-cusine/add-cusine.component';
import { UpdateCusineComponent } from './manage-cusine/update-cusine/update-cusine.component';

const arr:Routes=[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'pastorder',component:PastorderComponent},
  {path:'past_order_details/:id',component:PastOrderDetailsComponent},
  {path:'newcustomer',component:SignUpComponent},
  {path:'admin',component:AdminComponent},
  {path:'dish',loadChildren:'./manage-dish/dish.module#DishModule'},
  {path:'cusine',loadChildren:'./manage-cusine/cusine.module#CusineModule'},

];


export const routing=RouterModule.forRoot(arr,{preloadingStrategy:PreloadAllModules});
