import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListProductComponent} from './listProduct.component';
import {ArcProductComponent} from './arcProduct.component';
import {ListCategoryComponent} from './listCategory.component';
import {ArcCategoryComponent} from './arcCategory.component';

const productRoutes: Routes = [
  {
    path: 'product',
    component: ListProductComponent
  },
  {
    path: 'product/add',
    component: ArcProductComponent
  },
  {
    path: 'product/:id',
    component: ArcProductComponent
  },
  {
    path: 'category',
    component: ListCategoryComponent
  },
  {
    path: 'category/add',
    component: ArcCategoryComponent
  },
  {
    path: 'category/:id',
    component: ArcCategoryComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      productRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class ProductRoutingModule {}
