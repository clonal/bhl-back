import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ContentService} from './content.service';
import {Article} from '../model/article';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {LoggerService} from '../utils/logger.service';
import {DateService} from '../utils/date.service';

@Component({
  templateUrl: 'arcArticle.component.html'
})

export class ArcArticleComponent implements OnInit {
  article$: Observable<Article> | null = null;
  articleForm: FormGroup;
  constructor(private fb: FormBuilder,
              private logger: LoggerService,
              private route: ActivatedRoute,
              private dateUtil: DateService,
              private contentService: ContentService) {
    this.createForm();
  }


  ngOnInit(): void {
    let editing = false;
    this.route.paramMap.subscribe(params =>  editing = params.has('id'));
    if (editing) {
      this.article$ = this.route.paramMap
        .switchMap((params: ParamMap) => {
            return this.contentService.getArticle(params.get('id'));
        });
      this.article$.subscribe(result => {
        if (result != null) {
          this.articleForm.setValue({
            id: result.id,
            title: result.title,
            column: result.column,
            desc: result.desc,
            content: result.content,
            order: result.order
          });
        }
      });
    }
  }

  createForm() {
    this.articleForm = this.fb.group({
      id: 0,
      title: '',
      column: 0,
      desc: '',
      content: '',
      order: 0
    });
  }

  onSubmit() {
    const article = new Article(
      this.articleForm.get('id').value,
      +this.articleForm.get('column').value,
      this.articleForm.get('title').value,
      this.articleForm.get('desc').value,
      this.articleForm.get('content').value,
      this.articleForm.get('order').value,
      this.dateUtil.fmtDate()
    );
    this.contentService.saveArticle(article)
      .subscribe(result => {
        if (result['info']) {
          this.logger.debug(result['info']);
        }
      });
  }
}
