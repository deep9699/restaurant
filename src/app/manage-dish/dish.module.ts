import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";
import { AddDishComponent } from "./add-dish/add-dish.component";
import { ManageDishComponent } from "./manage-dish.component";
import { UpdateDishComponent } from "./update-dish/update-dish.component";
import { dish_router } from "./dish.routing";

@NgModule({

  declarations:[
    AddDishComponent,
    ManageDishComponent,
    UpdateDishComponent
  ],
  imports:[
    CommonModule,
    MaterialModule,
    FormsModule,
    dish_router
  ]

})

export class DishModule{}
