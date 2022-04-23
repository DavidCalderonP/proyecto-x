import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../../configuration/core/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log("authguard: ", this.auth.getCurrentUser)
    if( this.auth.getCurrentUser !== null){
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
