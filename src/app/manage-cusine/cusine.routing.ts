import {  RouterModule, Routes } from "@angular/router";
import { ManageCusineComponent } from "./manage-cusine.component";
import { AddCusineComponent } from "./add-cusine/add-cusine.component";
import { UpdateCusineComponent } from "./update-cusine/update-cusine.component";

const arr:Routes=[
{path:'',children:[
  {path:'',component:ManageCusineComponent},
  {path:'add_cusine',component:AddCusineComponent},
  {path:'update_cusine/:id',component:UpdateCusineComponent},
]}
];

export const cusine_router=RouterModule.forChild(arr);
