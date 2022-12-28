import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup.service';
import { AuthGuard } from './auth.guard';
import { EmailsService } from './emails.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';

@NgModule({
  declarations: [
    routingComponents,
    DashboardComponent,
    PageErrorComponent,
    SignupComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SignupService, AuthGuard, EmailsService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
}],
  bootstrap: [routingComponents]
})
export class AppModule { }
