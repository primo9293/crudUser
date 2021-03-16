import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DashboardRoutingModule } from './dashboard.routing';
import { BoardComponent } from './board/board.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { TextsComponent } from './product-detail/texts/texts.component';

@NgModule({
  declarations: [
  BoardComponent,
  ProductComponent,
  ProductDetailComponent,
  TextsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  exports: [
    BoardComponent,
    ProductComponent,
    ProductDetailComponent
  ]
})
export class DashboardModule { }