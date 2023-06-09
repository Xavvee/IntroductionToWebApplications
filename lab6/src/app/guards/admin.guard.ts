import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.getAuthenticated().pipe(
      map(()=>{
        if(this.auth.siteRoles.admin!==true){
          this.router.navigate([''])
          return false
        }
        return true
      })
    );
  }
  
  constructor(
    private auth:AuthenticationService,
    private fb:FirebaseService,
    private router:Router
  ){}
}
