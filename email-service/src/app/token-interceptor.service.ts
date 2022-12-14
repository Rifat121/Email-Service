import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { SignupService } from './signup.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private injector: Injector) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {
      let signup = this.injector.get(SignupService)
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${signup.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
  }
}
