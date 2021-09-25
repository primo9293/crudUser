import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  productsArr = [];

  datos = [{
    id: 1,
    title: 'Momentum True Wireless 2',
    price: 295.95,
    overview: 'For the past 75 years, Sennheiser has put sound first.  The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio tecnology and innovation, these new earbuds deliver the best listening experience anytime, anywhere.',
    features: 'Comodo',
    what: 'Dos audifonos y cargados'
  }]

  constructor() { }



  ngOnInit(): void {
   
  }




}
