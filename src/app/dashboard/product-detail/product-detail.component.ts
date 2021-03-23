import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  pagina: string;
  seleccionado: any
  productAra: any
  datos = [
    {
    id : 1,
    name: 'Overview'
    },
    {
      id : 2,
      name: 'Features'
    },
    {
      id : 3,
      name: `What's in the box?`
    }
  ]
  coverages=[
    {
      id: 1,
      text: '2 years coverage',
      description: 'For the past 75 years, Sennheiser has put sound first',
      extended: null
    },
    {
      id: 2,
      text: '3 years coverage',
      description: 'For the past 75 years, Sennheiser has put sound first',
      /* extended: '+$75' */
      extended: 75
    }
  ]
  features=[
    {
      id: 1,
      text: 'Voice Assistant support',
      extended: null
    },
    {
      id: 2,
      text: 'Customizable controls',
      // extended: '+$25'
      extended: 25
    }
  ]
  specifications=[
    {
      attributo: 'Dimensions',
      detalle: '76.8 x 43.8 x 34.7 mm(earbuds and charging case)'
    },
    {
      attributo: 'USB Standard',
      detalle: 'USB-C'
    },
    {
      attributo: 'Power supply',
      detalle: 'Sennheiser 7mm dynamic driver'
    },
    {
      attributo: 'Frequency response (Microphone)',
      detalle: '100 Hz to 10 10kHz'
    },
    {
      attributo: 'Frequency response',
      detalle: '5 - 21,000 Hz'
    },
    {
      attributo: 'Noise cancellation',
      detalle: 'Single-Mic ANC per earbud side'
    },
  ]
  selectedA = 1
  selectedN = '1'
  selectedTC: string
  selectedCove: number
  selectedFeat: number
  id: any
  imagenSelec: string = `./../../../assets/img/Ima1.jpg`
  text = 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.'
  precio_ini= 295.95;
  precio_covera= 0;
  precio_feature= 0;
  precio_total= 0;

  constructor(private activeRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.pagina = this.text
    this.precio_total = this.precio_ini
  }

  getProductos(){
    this.productService.getProductosFire()
      .subscribe(resp => {
        console.log(resp);
      })
  }

  clickImage(dato){  
    this.imagenSelec = `./../../../assets/img/Ima${dato}.jpg`
    this.selectedN = dato
  }

  cambiotext(num){
    this.selectedA = num;
    if(num===1){
      this.pagina = this.text
    } else if(num===2){
       this.pagina = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam dolore excepturi deserunt accusamus veritatis minima quam aliquid illo praesentium adipisci suscipit, reiciendis exercitationem voluptatem quaerat accusantium corrupti commodi doloribus labore!'
    } else {
      this.pagina = 'Box - charger'
    }
  }

  themeColo(text: string){
    this.selectedTC = text
  }

  cambioCove(num: number){
    this.selectedCove = num;
    // console.log(num);
    let a = this.coverages.filter(ele => ele.id === num )
    // console.log(a);
    this.precio_covera = a[0].extended  
    // console.log(this.precio_covera);
    this.precioTotal()  
  }

  cambioFeatures(num: number){
    this.selectedFeat = num;
    let a = this.features.filter(ele => ele.id === num )
    this.precio_feature = a[0].extended
    this.precioTotal()  
  }

  precioTotal(){
    this.precio_total = 0
    /* console.log('-',this.precio_ini);
    console.log('*',this.selectedCove);
    console.log('/',this.precio_feature); */
    this.precio_total = this.precio_ini + this.precio_covera + this.precio_feature
  }

  comprar(){
    Swal.fire({
      title: 'Agregado al carrito',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then(() => {
      // console.log('Agregado');
      this.router.navigate(['/board']);
    })
    .catch((err) => {
      console.log('err',err);
      Swal.fire('Error','Error hable con el administrador','error')
    });

  }
}
