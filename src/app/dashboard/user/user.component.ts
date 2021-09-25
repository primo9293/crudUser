import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [Validators.required,Validators.email,]);
  usuarioFormControl = new FormControl('', [Validators.required,]);
  nombreFormControl = new FormControl('', [Validators.required,]);
  apellidoFormControl = new FormControl('', [Validators.required,]);



}
