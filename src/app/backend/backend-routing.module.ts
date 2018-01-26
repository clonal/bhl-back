import {RouterModule, Routes} from '@angular/router';
import {BackendComponent} from './backend.component';
import {NgModule} from '@angular/core';

const backendRoutes: Routes = [
  {
    path: '',
    component: BackendComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      backendRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class BackendRoutingModule {}
