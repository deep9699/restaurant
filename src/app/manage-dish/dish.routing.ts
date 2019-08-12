import {  RouterModule, Routes } from "@angular/router";
import { ManageDishComponent } from "./manage-dish.component";
import { UpdateDishComponent } from "./update-dish/update-dish.component";
import { AddDishComponent } from "./add-dish/add-dish.component";

const arr:Routes=[
{path:'',children:[
  {path:'',component:ManageDishComponent},
  {path:'adddish',component:AddDishComponent},
  {path:'update_dish/:id',component:UpdateDishComponent}
]}
];

export const dish_router=RouterModule.forChild(arr);
