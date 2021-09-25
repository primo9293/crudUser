import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { 
      path: 'board', 
      component: BoardComponent,
  },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
