import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
/*   {
    path: 'login',
    // canActivate: [AdminGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }, */
  /* {
    path: 'admin',
    // canActivate: [AdminguardGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }, */
 /*  {
    path: '**',
    loadChildren: () => import('./nopagefound/page-not-found.module').then(m => m.PageNotFoundModule)
  }, */
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
