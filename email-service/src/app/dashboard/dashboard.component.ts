import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailsService } from '../emails.service';
import { User } from '../user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _emails: EmailsService, private _router: Router){}

  emails = [{"name":"","msg":"","date":""}]
  userModel = new User;

  ngOnInit(){
    this._emails.get_emails()
      .subscribe(
        res => this.emails = res,
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this._router.navigate(['/login'])
            }
          }
        }
        )
  }

}
