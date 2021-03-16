import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { DashboardRoutingModule } from './dashboard/dashboard.routing';
import { PageNotFoundRoutingModule } from './page-not-found/page-not-found-routing.module';
import { AdminRoutingModule } from './admin/admin.routing';
import { LayoutComponent } from './layout/layout.component';
import { GuardGuard } from './guard/guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'board',
        pathMatch: 'full',
      },
      {
        path: 'board',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    canActivate: [GuardGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
]

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}),
    // AuthRoutingModule,
    DashboardRoutingModule,
    AdminRoutingModule,
    AuthRoutingModule
    // PageNotFoundRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
