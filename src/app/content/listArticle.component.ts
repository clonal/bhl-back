import {Component, OnInit} from '@angular/core';
import {Article} from '../model/article';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: 'listArticle.component.html'
})

export class ListArticleComponent {
  articles: Article[];
  column: number|null = null;
  constructor(private client: HttpClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.initArticles(this.column);
  }

  initArticles(column: string|any) {
    const str = column == null ? '' : '?column=' + column;
    this.client.get('/api/article/listArticles' + str)
      .subscribe((result) => {
        this.articles = result as Article[];
      });
  }

  deleteArticle(article: number) {
    this.client.get('/api/article/removeArticle/' + article)
      .subscribe((data) => {
        if (data['error']) {
          alert(data['error']);
        }
        if (data['info']) {
          alert(data['info']);
          this.initArticles(this.column);
        }
      });
  }

  addArticle(column: number) {
    if (column === 0) {
      this.router.navigate(['add'], {
        relativeTo: this.route
      });
    } else {
      this.router.navigate(['' + column], {
        relativeTo: this.route
      });
    }
  }
}
