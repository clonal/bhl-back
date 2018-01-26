import {Injectable} from '@angular/core';
import {Column} from '../model/column';
import {LoggerService} from '../utils/logger.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Article} from '../model/article';

@Injectable()
export class ContentService {
  columns: Column[];
  constructor(private client: HttpClient,
              private logger: LoggerService) {
    this.initColumns();
  }

  initColumns() {
    this.client.get('/api/column/listColumns').subscribe(result => {
      this.columns = result as Column[];
      this.logger.debug(JSON.stringify(this.columns));
    });
  }

  leafColumns(): Column[] {
    let leafs = [];
    if (this.columns) {
      this.columns.forEach((c, i, a) => {
        if (c.children.length !== 0) {
          leafs = leafs.concat(c.children);
        }
      });
    }
    return leafs;
  }

  deleteColumn(id: number) {
    this.client.post('/api/column/deleteColumn/' + id, {})
      .subscribe(result => {
        alert(result['info']);
        this.initColumns();
      });
  }

  getColumn(id: string | any): Observable<Column>|null {
    return this.client.get('/api/column/getColumn/' + id, {})
      .map(result => {
        if (result['column']) {
          return result['column'] as Column;
        }
        if (result['error']) {
          return null;
        }
      });
  }

  saveColumn(column: Column) {
    this.client.post('/api/column/saveColumn', column)
      .subscribe(result => {
        if (result['info']) {
          this.logger.debug(result['info']);
          this.initColumns();
        }
      });
  }

  getArticle(id: string | any): Observable<Article>|null {
    return this.client.get('/api/article/showArticle/' + id, {})
      .map(result => {
        if (result['article']) {
          return result['article'] as Article;
        }
        if (result['error']) {
          return null;
        }
      });
  }

  saveArticle(article: Article) {
    return this.client.post('/api/article/saveArticle', article);
  }
}
