import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './utils/page-not-found.component';
import {BackendComponent} from './backend/backend.component';
import {SecuredGuard} from './auth/secured-guard.service';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './login/signUp.component';
import {ActivateAccountComponent} from './login/activateAccount.component';
import {ReceiptComponent} from './mws/receipt.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'activate/:token',
    component: ActivateAccountComponent
  },
  {
    path: 'mws/receipt',
    component: ReceiptComponent
  },
  {
    path: 'back',
    loadChildren: './backend/backend.module#BackendModule',
    canActivate: [SecuredGuard]
  },
  {
    path: '',
    redirectTo: '/back',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
