import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  textingr: string;
  boton: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.authService.validarToken()
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      user_mail: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      user_password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get correoField(){
    return this.form.get('user_mail');
  }

  get passwordField() {
    return this.form.get('user_password');
  }

  iniciar() {
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login( value.user_mail, value.user_password )
          .then(() => {
            this.authService.obtenerUsuario()
            Swal.fire(
              'Login',
              `Login exitoso, bienvenido`,
              'success'
            );
            console.log('Login exitoo');
            this.router.navigate(['/admin']);
          })
          .catch((err) => {
            console.log('err',err);
            Swal.fire('Error','Usuario o Clave incorrecta, por favor intente de nuevo','error')
          });
    }else {
      this.form.markAllAsTouched()
    }

  }


}
