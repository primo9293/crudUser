import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productsArr = [];
  displayedColumns: string[] = ['title', 'price', 'actions'];


  constructor(private authService: AuthService,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductos()
  }

  logout(){
    this .authService.logout()
        .then(() => {
          this.router.navigate(['./board']);
        });
  }

  deleteProduct(id: string) {
    this.productService.deleteProductoFire(id)
        .then(() => {
          Swal.fire(
            'Eliminado',
            `Producto eliminado exitoso`,
            'success'
          );
        })
        .catch((err) => {
          console.log(err);
          Swal.fire('Error','Hable con el Administrador','error')
        });
  
  }

  getProductos(){
    this.productService.getProductosFire()
      .subscribe(resp => {
        console.log(resp);
        this.productsArr = resp
      })
  }

}
