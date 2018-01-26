import {NgModule} from '@angular/core';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BackendRoutingModule} from './backend-routing.module';
import {BackendComponent} from './backend.component';
import {ContentModule} from '../content/content.module';
import {ProductModule} from '../product/product.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ContentModule,
    ProductModule,
    BackendRoutingModule
  ],
  declarations: [
    BackendComponent
  ],
  providers: [
  ]
})

export class BackendModule {}
