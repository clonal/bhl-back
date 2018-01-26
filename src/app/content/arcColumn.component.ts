import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {LoggerService} from '../utils/logger.service';
import {Observable} from 'rxjs/Observable';
import {Column} from '../model/column';
import {ContentService} from './content.service';

@Component({
  templateUrl: 'arcColumn.component.html'
})

export class ArcColumnComponent implements OnInit {
  columnForm: FormGroup;
  constructor(private fb: FormBuilder,
              private logger: LoggerService,
              private route: ActivatedRoute,
              private contentService: ContentService) {
    this.createForm();
  }

  ngOnInit(): void {
    let editing = false;
    this.route.paramMap.subscribe(params =>  editing = params.has('id'));
    if (editing) {
      const column$ = this.route.paramMap
        .switchMap((params: ParamMap) => {
            return this.contentService.getColumn(params.get('id'));
        });
      column$.subscribe(result => {
        if (result != null) {
          this.columnForm.setValue({
              id: result.id,
              name: result.name,
              type: result.parent === 0 ? '0' : '1',
              parent: result.parent,
              desc: result.desc,
              content: result.content,
              order: result.order
            }
          );
        }
      });
    } else {
      this.route.queryParamMap.subscribe((params) => {
        let columnType = '';
        let parent = '0';
        if (params.has('type')) {
          columnType += params.get('type');
        }
        if (params.has('parent')) {
          parent = params.get('parent');
        }
        this.columnForm.patchValue({
            type: columnType,
            parent: parent,
          }
        );
      });
    }
  }

  createForm() {
    this.columnForm = this.fb.group({
      id: 0,
      type: 0,
      name: '',
      parent: 0,
      desc: '',
      content: '',
      order: 0
    });
  }

  onSubmit() {
    const column = new Column(
      this.columnForm.get('id').value,
      this.columnForm.get('name').value,
      this.columnForm.get('type').value === '0' ? 0 : +this.columnForm.get('parent').value,
      [],
      this.columnForm.get('desc').value,
      this.columnForm.get('content').value,
      0,
      []
    );
      this.contentService.saveColumn(column);
  }
}
