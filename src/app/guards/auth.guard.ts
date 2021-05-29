import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)  : boolean {

      const token = localStorage.getItem('token');
      if(token != null){
        const helper = new JwtHelperService();
        if(helper.isTokenExpired(token)){
          this.router.navigate(['/login'])
          return false;
        } else{
          return true;
        }
      }
      return false
  }
  
}
