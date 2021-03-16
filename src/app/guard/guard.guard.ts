import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router){
      console.log('entroGuard');

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      let valido = this.authService.validarToken()
      console.log(valido);
      this.router.navigateByUrl('/login');

      return true;
  }
  
}
