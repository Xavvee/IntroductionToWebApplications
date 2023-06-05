import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.getAuthenticated().pipe(
        map((state)=>{
          if(state==null){
            this.router.navigate([''])
            return false
          }
          this.auth.userData=state
          return true
        })
      );
  }
 
  
  constructor(
    private auth:AuthenticationService,
    private fb:FirebaseService,
    private router:Router,
  ){}
}
