import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  pagina: string;
  seleccionado: any
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
  imagenSelec: string = `./../../../assets/img/Ima1.jpg`
  text = 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.'

  constructor() { }

  ngOnInit(): void {
    this.pagina = this.text
  }

  clickImage(dato){  
    this.imagenSelec = `./../../../assets/img/Ima${dato}.jpg`
  }

  cambiotext(text){
    if(text===1){
      this.pagina = this.text
    } else if(text===2){
       this.pagina = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam dolore excepturi deserunt accusamus veritatis minima quam aliquid illo praesentium adipisci suscipit, reiciendis exercitationem voluptatem quaerat accusantium corrupti commodi doloribus labore!'
    } else {
      this.pagina = 'Box - charger'
    }
  }

}
