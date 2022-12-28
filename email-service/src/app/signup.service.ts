import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  _url = 'http://localhost:3000/api/signup';
  _login = 'http://localhost:3000/api/login';
  constructor(private _http: HttpClient, private _router: Router) { }

  signup(user: User){
    return this._http.post<any>(this._url, user)
      .pipe(catchError(this.errorHandler))
    
  }
  login_user(user: User){
    return this._http.post<any>(this._login,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
