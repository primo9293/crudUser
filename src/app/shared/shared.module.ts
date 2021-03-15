import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
  AppNavbarComponent,
],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    AppNavbarComponent,
    MaterialModule
  ]
})
export class SharedModule { }