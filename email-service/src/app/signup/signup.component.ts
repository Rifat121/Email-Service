import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title = 'email-service';
  errorMsg = '';
  userModel = new User('','','');

  constructor(private _signupService: SignupService, private _router : Router){}

  userEmail = new FormGroup({
    Email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ])
  });
  
  onSubmit(){
    console.log(this.userModel);
    this._signupService.signup(this.userModel)
      .subscribe(
        data => {console.log('success',data)
          localStorage.setItem('token',data.token)
          this._router.navigate(['/dashboard'])  
      },
        error =>this.errorMsg = error.statusText
      )
  }

}
