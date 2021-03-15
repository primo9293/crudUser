import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  
  constructor(private router: Router) { 
      
    }

  ngOnInit(): void {

  }

  buscarPelicula(texto: string){
   
  }

  logout(){
    
  }

  verificarUsuario(){
  
    }
  

  validarRutas(usuario){

  }

}
