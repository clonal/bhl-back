import {Injectable, OnInit} from '@angular/core';
import {Department} from '../model/department';
import {LoggerService} from '../utils/logger.service';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';
import {Product} from '../model/product';
import {FileUploader} from "ng2-file-upload";

@Injectable()
export class ProductService implements OnInit {
  departments: Department[];
  products: Product[];
  constructor (private client: HttpClient,
               private logger: LoggerService) {
    this.initDepartments();
    this.initProducts();
  }

  ngOnInit(): void {
  }

  initDepartments() {
    this.client.get('/api/product/listDepartments')
      .subscribe(result => {
        this.departments = result as Department[];
      });
  }

  initProducts() {
    this.client.get('/api/product/queryTopProducts')
      .subscribe(result => {
        this.products = result as Product[];
      });
  }

  leafCategories() {
    let leafs = [];
    if (this.departments) {
      this.departments.forEach((c, i, a) => {
        if (c.children.length !== 0) {
          leafs = leafs.concat(c.children);
        }
      });
    }
    return leafs;
  }

  deleteDepartment(department: number) {
    this.client.post('/api/product/removeDepartment/' + department, {})
      .subscribe(result => {
        alert(result['info']);
        this.initDepartments();
      });
  }


  deleteCategory(category: number) {
    this.client.post('/api/product/removeCategory/' + category, {})
      .subscribe(result => {
        alert(result['info']);
        this.initDepartments();
      });
  }

  getDepartment(id: string | any) {
    return this.client.get('/api/product/findDepartment?department=' + id)
      .map(result => {
        if (result['department']) {
          return result['department'] as Department;
        } else {
          this.logger.debug(result['error']);
          return null;
        }
      });
  }

  getCategory(id: string | any) {
    return this.client.get('/api/product/findCategory?category=' + id)
      .map(result => {
        if (result['category']) {
          return result['category'] as Category;
        } else {
          this.logger.debug(result['error']);
          return null;
        }
      });
  }

  saveCategory(category: Category) {
    this.client.post('/api/product/saveCategory', category)
      .subscribe(result => {
        if (result['info']) {
          this.logger.debug(result['info']);
          this.initDepartments();
        }
      });
  }

  saveDepartment(department: Department) {
    this.client.post('/api/product/saveDepartment', department)
      .subscribe(result => {
        if (result['info']) {
          this.logger.debug(result['info']);
          this.initDepartments();
        }
      });
  }

    deleteProduct(id: number, isParent: boolean) {
    const str = isParent ? '?p=true' : '';
    this.client.post('/api/product/removeProduct/' + id + str, {})
      .subscribe(result => {
        alert(result['info']);
        this.initProducts();
      });
  }

  getProduct(id: string | any) {
    const str = id == null ? '' : '?product=' + id;
    return this.client.get('/api/product/findProduct' + str)
      .map(result => {
        if (result) {
          if (result['error']) {
            return null;
          } else if (result['product']) {
            return result['product'] as Product;
          }
        } else {
          return null;
        }
      });
  }

  addProduct(product: Product) {
    this.client.post('/api/product/addProduct', product).subscribe(p => {
      this.initProducts();
    });
  }

  uploadProductPic(uploader: FileUploader, i: any, id: string) {
    const op = uploader.options;
    const idStr = id == null ? '' : '&pid=' + id;
    op.url = '/api/product/updateProductPic?index=' + i + idStr;
    uploader.setOptions(op);
    uploader.uploadAll();
  }
}
