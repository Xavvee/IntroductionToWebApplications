import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';
import { FirebaseService } from './firebase.service';
import { Roles, User } from './IUser';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  siteRoles: Roles={
    guest:true,
    client:false,
    manager:false,
    admin:false,
    banned:false
  };
  stateSetting:string='local';

  constructor(
    private router:Router,
    private fb:FirebaseService,
    private cart:CartService,
    private auth:AngularFireAuth
  ) {
    auth.authState.subscribe(async (event:any) => {
      if(event){
        this.userData=event;
        const roles = await this.fb.getUserRole(event?.uid);
        this.siteRoles=roles as Roles;
      }else{
        this.userData=null;
        this.siteRoles={
          guest:true,
          client:false,
          manager:false,
          admin:false,
          banned:false,
        }
      }
    })
   }

  userData:any=null;


  isUserLoggedIn(){
    return this.userData!=null
  }

  getUserData(){
    return this.auth.currentUser;
  }

  getAuthenticated():Observable<any>{
    return this.auth.authState;
  }


  signOut(){
    return this.auth.signOut().then((event)=>{
      this.cart.cart=[]
      this.router.navigate([''])
    })
  }

  changeState(change:string){
    this.stateSetting=change
  }


  registerWithEmailAndPass(email:string,password:string){
    return this.auth
      .createUserWithEmailAndPassword(email,password)
      .then((res)=>{
        let userData=new User(res.user)
        this.fb.addNewUser(userData)
        this.router.navigate(['dashboard']);
      })
      .catch((error)=>{
        window.alert(error.message)
      })
  }
  
  
  

  signInWithEmailAndPass(email:string,password:string){
    return this.auth.setPersistence(this.stateSetting).then((_)=>{
      return this.auth
        .signInWithEmailAndPassword(email,password)
        .then((event)=>{
          this.router.navigate(['dashboard'])
        }).catch((error)=>{
          window.alert(error.message)
        });
    });
  }





}
