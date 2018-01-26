import {Component} from '@angular/core';
import {ProductService} from "./product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: 'listProduct.component.html'
})

export class ListProductComponent {
  constructor (private productService: ProductService,
               private router: Router,
               private route: ActivatedRoute) {}

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

  addProduct(id: number) {
    if (id === 0) {
      this.router.navigate(['add'], {
        relativeTo: this.route
      });
    } else {
      this.router.navigate(['add'], {
        queryParams: { 'item': '' + id },
        relativeTo: this.route
      });
    }
  }

  editProduct(id: number) {
    this.router.navigate(['' + id], { relativeTo: this.route });
  }
}

