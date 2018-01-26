import {Component} from '@angular/core';
import {ProductService} from './product.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'listCategory.component.html'
})

export class ListCategoryComponent {
  constructor (private productService: ProductService,
               private router: Router,
               private route: ActivatedRoute) {}

  addDepartment() {
    this.router.navigate(['add'], {
      queryParams: { 'tp': 'd'},
      relativeTo: this.route });
  }

  editDepartment(department: number) {
    this.router.navigate(['' + department], {
      queryParams: { 'tp': 'd'},
      relativeTo: this.route });
  }

  deleteDepartment(department: number) {
    this.productService.deleteDepartment(department);
  }

  addCategory(department: number) {
    this.router.navigate(['add'], {
      queryParams: { 'de': '' + department },
      relativeTo: this.route });
  }

  editCategory(category: number) {
    this.router.navigate(['' + category], {
      relativeTo: this.route });
  }

  deleteCategory(category: number) {
    this.productService.deleteCategory(category);
  }
}
