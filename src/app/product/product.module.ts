import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {ProductRoutingModule} from './product-routing.module';
import {ListProductComponent} from './listProduct.component';
import {ArcProductComponent} from './arcProduct.component';
import {ListCategoryComponent} from './listCategory.component';
import {ArcCategoryComponent} from './arcCategory.component';
import {ProductService} from './product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ProductRoutingModule
  ],
  declarations: [
    ListProductComponent,
    ArcProductComponent,
    ListCategoryComponent,
    ArcCategoryComponent,
  ],
  providers: [
    ProductService
  ]
})

export class ProductModule {}
