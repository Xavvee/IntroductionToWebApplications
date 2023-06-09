import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LoginTwiceGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.getAuthenticated().pipe(
      map((state)=>{
        if(state!==null){
          this.router.navigate(['dashboard'])
          return false
        }
        return true
      })
    );
  }

  constructor(
    private fb:FirebaseService,
    private auth:AuthenticationService,
    private router:Router
  ){}
  
}
