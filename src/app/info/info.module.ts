import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ListFeedbackComponent} from './listFeedback.component';
import {InfoService} from './info.service';
import {InfoRoutingModule} from './info-routing.module';
import {ListCommentComponent} from './listComment.component';
import {ArcFeedbackComponent} from './arcFeedback.component';
import {ArcCommentComponent} from './arcComment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InfoRoutingModule,
  ],
  declarations: [
    ListFeedbackComponent,
    ListCommentComponent,
    ArcFeedbackComponent,
    ArcCommentComponent,
  ],
  providers: [
    InfoService,
  ]
})

export class InfoModule {
  constructor () {}
}
