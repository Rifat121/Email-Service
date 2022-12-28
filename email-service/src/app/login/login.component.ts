import { Component } from '@angular/core';
import { User } from '../user';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // const dashboard = document.getElementById("")
  constructor(private _login: SignupService, private _router : Router){}
  user = new User();
  errorMsg = ''
  // Login(){
  //   if(this.userModel.email==='a@a.com' && this.userModel.password==='asdfghjk')
  //   {
  //     alert('Login Success');
    
  //   }
    Login(){
      this._login.login_user(this.user)
        .subscribe(
            res=>{console.log(res)
            localStorage.setItem('token',res.token)
            this._router.navigate(['/dashboard'])  
        },
          err=>this.errorMsg=err.statusText
        )
    }
    // userModel = new User('','','');
  }
