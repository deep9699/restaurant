import { NgModule } from "@angular/core";
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

@NgModule({

  imports:[
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatMenuModule
  ],
  exports:[
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSidenavModule,
    MatMenuModule
  ]

})

export class MaterialModule{}
