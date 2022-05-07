import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../../configuration/core/auth.service";
import {NgxPermissionsService} from "ngx-permissions";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private permissions: NgxPermissionsService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const permissions = this.auth.getCurrentUser;
    //console.log("authguard: ", permissions)
    if( permissions !== null){
      //console.log("22222")
      if(!!permissions.permissions){
        //console.log("se cargo bien")
        let permissionsAccepted: string[] = [];
        Object.keys(permissions.permissions).forEach(value=>{
          if(permissions.permissions[value] && value.substring(0,8)=='clientes'){
            console.log("entrooooo")
            permissionsAccepted.push(value)
          }
        })
        console.log("finales: ", permissionsAccepted)
        this.permissions.loadPermissions(permissionsAccepted)
        //console.log("se cargo bien", permissionsAccepted)
      }
      return true;
    }




    //this.permissions.loadPermissions()
    this.router.navigate(['/auth/login']);
    return false;
  }
}
