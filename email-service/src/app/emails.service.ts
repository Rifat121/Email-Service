import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  private url = "api/dashboard";


  constructor(private _http : HttpClient) { }

  get_emails(){
    return this._http.get<any>(this.url)
  }
}
