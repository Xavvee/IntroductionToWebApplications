import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(private auth: AuthenticationService){}

  correctData:boolean=false
  incorrectData:boolean=false
  showLoader:boolean=false


  loginForm=new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  submitLoginForm(){
    if(!this.loginForm.valid){
      this.incorrectData=true
      this.correctData=false
      this.showLoader=false
      return
    }

    this.correctData=true
    this.showLoader=true
    this.incorrectData=false
    let login = this.loginForm.get('login')!.value
    let password= this.loginForm.get('password')!.value
    if(login==null || password==null){
      return
    }
    this.auth.signInWithEmailAndPass(login,password)
    this.loginForm.reset()
    this.showLoader=false
  }

}
