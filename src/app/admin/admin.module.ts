import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    AdminRoutingModule,
    RouterModule,
  ],
  exports: [
    AdminComponent,
    ProductComponent,
    AdminRoutingModule
  ]
})
export class AdminModule { }