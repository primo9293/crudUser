import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { BoardComponent } from './board/board.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { 
      path: 'board', 
      component: BoardComponent,
  },
  { 
    path: 'product', 
    component: ProductComponent
  },
  { 
    path: 'product/:id', 
    component: ProductDetailComponent
  },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
