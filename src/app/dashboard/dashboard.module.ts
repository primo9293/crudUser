import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DashboardRoutingModule } from './dashboard.routing';
import { BoardComponent } from './board/board.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
// import { MatDialogModule } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';

@NgModule({
  declarations: [
  BoardComponent,
  TableComponent,
  UserComponent,
  DialogOverviewExampleDialogComponent,
  DialogoConfirmacionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedModule,
    // MatDialogModule
  ],
  exports: [
    BoardComponent,
    TableComponent,
    UserComponent,
    DialogOverviewExampleDialogComponent,
    DialogoConfirmacionComponent,
  ]
})
export class DashboardModule { }