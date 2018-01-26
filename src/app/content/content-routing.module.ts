import {RouterModule, Routes} from '@angular/router';
import {ListColumnComponent} from './listColumn.component';
import {ListArticleComponent} from "./listArticle.component";
import {ArcColumnComponent} from "./arcColumn.component";
import {NgModule} from "@angular/core";
import {ArcArticleComponent} from "./arcArticle.component";

const contentRoutes: Routes = [
  {
    path: 'column',
    component: ListColumnComponent
  },
  {
    path: 'column/add',
    component: ArcColumnComponent
  },
  {
    path: 'column/:id',
    component: ArcColumnComponent
  },
  {
    path: 'article',
    component: ListArticleComponent
  },
  {
    path: 'article/add',
    component: ArcArticleComponent
  },
  {
    path: 'article/:id',
    component: ArcArticleComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      contentRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class ContentRoutingModule {}
