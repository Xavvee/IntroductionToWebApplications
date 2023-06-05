import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { FirebaseService } from '../firebase.service';
import { User } from '../IUser';

@Component({
  selector: 'app-admincontrols',
  templateUrl: './admincontrols.component.html',
  styleUrls: ['./admincontrols.component.css']
})
export class AdmincontrolsComponent implements OnInit {

  constructor(
    private fb:FirebaseService,
    public auth: AuthenticationService
  ){}
  selectedState=this.auth.stateSetting
  users: User[]=[]
  usersSubscription: Subscription|undefined
  roleToAdd: any;
  roleToDismiss: any;

  ngOnInit(): void{
    this.usersSubscription=this.fb.getUsers().subscribe((users)=>{
      this.users=[]
      for(let user of users){
        let userToAdd=new User(user.payload.val())
        userToAdd.uid=user.payload.key || 'undefined'
        this.users.push(userToAdd)
      }
    })
  }

  chosenState(){
    this.auth.changeState(this.selectedState)
  }

  banUser(uid:string){
    this.fb.changeUserRole(uid, 'banned', 'true')
  }

  setRole(uid:string,role:string,value:boolean){
    this.fb.changeUserRole(uid,role,String(value))
  }

  findUserById(uid:string):User|null{
    for(let user of this.users){
      if(uid==user.uid){
        return user
      }
    }
    return null
  }

  ngOnDestroy():void{
    this.usersSubscription?.unsubscribe()
  }
}
