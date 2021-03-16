import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  transform(producto: any): unknown {
    if(!producto){
      return "assets/img/noimage.png";
    } 
    if(producto.includes('https'))
    return producto;
  }

}
