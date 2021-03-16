import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  form: FormGroup;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService) {
      this.buildForm();
    }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      key: ['', []],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(1)]],
      img: ['', []],
    });
  }

  get tituloField(){
    return this.form.get('titulo');
  }

  get descripcionField() {
    return this.form.get('descripcion');
  }

  get priceField(){
    return this.form.get('price');
  }

  get imgField(){
    return this.form.get('img');
  }

  guardar(){
    if (this.form.valid) {
      const data = this.form.value
      this.productService.addProducto(data)
      .then(() => {
        Swal.fire(
          'Creado',
          `Producto creado sastifactoriamente`,
          'success'
        );
        this.router.navigate(['/admin']);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire('Error','Error creando el producto','error')
      });

    } else{
      this.form.markAllAsTouched()
    }
  }

}
