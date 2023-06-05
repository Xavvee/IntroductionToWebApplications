import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.siteRoles.manager){
        return true
      }
    this.router.navigate([''])
    return false
  }

  constructor(
    private auth:AuthenticationService,
    private router: Router,
    private fb: FirebaseService
  ){}
  
}
