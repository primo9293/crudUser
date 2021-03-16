import { Injectable } from '@angular/core';

import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Producto } from './../models/product.interface'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productoDb: AngularFireList<Producto>;

  productos:any[]= [];

  constructor( private http : HttpClient,
               private db: AngularFireDatabase) { 
                this.productoDb = this.db.list('/productos', ref => ref.orderByChild('titulo'));
               }

  getProductosFire(): Observable<Producto[]> {
    return this.productoDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ $key: c.key, ...c.payload.val() }));
      })
    );
  }

  addProducto(producto: Producto) {
    return this.productoDb.push(producto);
  }

  deleteProductoFire(id: string){
    return this.db.list('/productos').remove(id)
    /* .then(() => {
      return true
    })
    .catch(() => {
      return false
    }); */
  }

}
