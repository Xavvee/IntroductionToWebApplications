import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  ngOnInit(): void {
    
  }
  constructor(private auth: AuthenticationService){}
  errorData:boolean=false;
  correctData:boolean=false;



  registrationForm=new FormGroup({
    login:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  submitRegistrationForm(){
    if(!this.registrationForm.valid){
      this.errorData=true
      this.correctData=false
      return
    }
    let login = this.registrationForm.get('login')!.value
    let password = this.registrationForm.get('password')!.value
    console.log(login)
    console.log(password)
    if(login!=null && password!=null){
      console.log(login)
      console.log(password)
    this.errorData=false
    this.correctData=true
    this.auth.registerWithEmailAndPass(login,password)
    this.registrationForm.reset()
    }
  }
}
