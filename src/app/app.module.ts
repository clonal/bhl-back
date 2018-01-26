import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoggerService} from './utils/logger.service';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './login/signUp.component';
import {ActivateAccountComponent} from './login/activateAccount.component';
import {ReceiptComponent} from './mws/receipt.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {LoginService, TOKEN_NAME} from './login/login.service';
import {AuthService} from './auth/auth.service';
import {DateService} from './utils/date.service';
import {SecuredGuard} from './auth/secured-guard.service';
import {MwsService} from './mws/mws.service';
import {PageNotFoundComponent} from './utils/page-not-found.component';
import {FileUploadModule} from 'ng2-file-upload';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {BackendModule} from './backend/backend.module';
import {SideNavComponent} from './nav/sideNav.component';
import {BackendService} from './backend/backend.service';

export function jwtOptionsFactory(): any {
  return {
    tokenGetter: () => {
      return localStorage.getItem(TOKEN_NAME);
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ActivateAccountComponent,
    ReceiptComponent,
    PageNotFoundComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      },
      config: { skipWhenExpired: true }
    }),
    BackendModule,
    AppRoutingModule,
  ],
  providers: [
    LoggerService,
    AuthService,
    LoginService,
    BackendService,
    MwsService,
    SecuredGuard,
    DateService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
