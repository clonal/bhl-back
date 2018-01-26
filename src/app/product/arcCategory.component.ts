import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from './product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {LoggerService} from '../utils/logger.service';
import {FileUploader} from 'ng2-file-upload';
import {Category} from '../model/category';
import {Department} from '../model/department';

@Component({
  templateUrl: 'arcCategory.component.html'
})

export class ArcCategoryComponent implements OnInit {
  editing = false;
  categoryForm: FormGroup;
  uploader: FileUploader = new FileUploader({
    url: '/api/product/addCategoryBanner',
    method: 'POST'
  });
  constructor (private fb: FormBuilder,
               private logger: LoggerService,
               private route: ActivatedRoute,
               private productService: ProductService) {
    this.createForm();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.editing = param.has('id');
      this.route.queryParamMap.subscribe((params) => {
        if (params.has('tp')) {
          this.categoryForm.patchValue({
            type: params.get('tp')
          });
        }
        if (this.editing) {
          // 如果是编辑模式
          if (this.categoryForm.get('type').value === 'd') {
            const entity$ = this.route.paramMap
              .switchMap((p: ParamMap) => {
                return this.productService.getDepartment(p.get('id'));
              });
            entity$.subscribe(result => {
              if (result != null) {
                this.categoryForm.patchValue({
                  id: result.id,
                  name: result.name,
                  desc: result.desc,
                  order: result.order
                });
              }
            });
          } else {
            const entity$ = this.route.paramMap
              .switchMap((p: ParamMap) => {
                return this.productService.getCategory(p.get('id'));
              });
            entity$.subscribe(result => {
              if (result != null) {
                this.categoryForm.patchValue({
                  id: result.id,
                  name: result.name,
                  desc: result.desc,
                  banner: result.banner,
                  department: result.department
                });
              }
            });
          }
        }
      });
    });
  }

  createForm() {
    this.categoryForm = this.fb.group({
      id: 0,
      type: 'c',
      name: '',
      desc: '',
      order: 0,
      banner: '',
      department: 0
    });
  }

  onSubmit() {
    if (this.categoryForm.get('type').value === 'c') {
      this.saveCategory();
    } else {
      this.saveDepartment();
    }
  }

  saveCategory() {
    const category = new Category(
      this.categoryForm.get('id').value,
      this.categoryForm.get('name').value,
      this.categoryForm.get('desc').value,
      +this.categoryForm.get('department').value,
      this.categoryForm.get('banner').value
    );
    this.productService.saveCategory(category);
  }

  saveDepartment() {
    const department = new Department(
      this.categoryForm.get('id').value,
      this.categoryForm.get('name').value,
      this.categoryForm.get('desc').value,
      this.categoryForm.get('order').value,
      []
    );
    this.productService.saveDepartment(department);
  }
}
