import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { RegistrationComponent } from './components/registration/registration';
import { CheckDataService } from './components/check-data.service'
import { AuthService } from './components/auth.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    PasswordResetComponent,
    RegistrationComponent,
    NewPasswordComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [    
    CheckDataService,
    AuthService],

  bootstrap: [AppComponent]
})

export class AppModule { }
