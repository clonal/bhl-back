import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ListFeedbackComponent} from './listFeedback.component';
import {ListCommentComponent} from './listComment.component';
import {ArcFeedbackComponent} from './arcFeedback.component';
import {ArcCommentComponent} from './arcComment.component';

const infoRoutes: Routes = [
  {
    path: 'feedback',
    component: ListFeedbackComponent
  },
  {
    path: 'feedback/:id',
    component: ArcFeedbackComponent
  },
  {
    path: 'comment',
    component: ListCommentComponent
  },
  {
    path: 'comment/:id',
    component: ArcCommentComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      infoRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class InfoRoutingModule {}
