import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form: FormGroup;

   constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required, , Validators.minLength(8)]],
      user_mail: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      user_password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  registrar(){
      if (this.form.valid) {
        const value = this.form.value;
        this.authService.createUser(value.user_mail, value.user_password)
        .then(() => {
          console.log('Valido');
          Swal.fire(
            'Registrar',
            `Usuario creado correctamente, por favor inicie sesión`,
            'success'
            );
          this.router.navigate(['/login']);
        })
        .catch((err) => {
          console.log('error',err);
          Swal.fire('Error','Usuario o Clave incorrecta, por favor intente de nuevo','error')
        });
      }
  }

  get nombreField(){
    return this.form.get('nombre');
  }

  get correoField(){
    return this.form.get('user_mail');
  }

  get passwordField() {
    return this.form.get('user_password');
  }

}
