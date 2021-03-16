import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { 
    path: 'admin', 
    component: AdminComponent,
    /* children: [
      { 
        path: 'admin', 
        component: AdminComponent
      },
      { 
        path: 'producto/:id', 
        component: ProductComponent
      },
    ] */
  },
  { 
    path: 'producto/:id', 
    component: ProductComponent
  },

  /* {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full',
      },
      { 
        path: 'admin', 
        component: AdminComponent
      },
      { 
        path: 'catalogo', 
        component: CatalogoComponent
      },
    ]
  } */
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
