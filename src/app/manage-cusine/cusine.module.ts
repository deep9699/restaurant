import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { ManageCusineComponent } from "./manage-cusine.component";
import { AddCusineComponent } from "./add-cusine/add-cusine.component";
import { UpdateCusineComponent } from "./update-cusine/update-cusine.component";
import { cusine_router } from "./cusine.routing";

@NgModule({

  declarations:[
    ManageCusineComponent,
    AddCusineComponent,
    UpdateCusineComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    MaterialModule,
    cusine_router
  ]

})

export class CusineModule{}
