import {NgModule} from '@angular/core';
import {ContentRoutingModule} from './content-routing.module';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListArticleComponent} from './listArticle.component';
import {ListColumnComponent} from './listColumn.component';
import {ArcArticleComponent} from './arcArticle.component';
import {ArcColumnComponent} from './arcColumn.component';
import {CommonModule} from '@angular/common';
import {ContentService} from './content.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ContentRoutingModule
  ],
  declarations: [
    ListArticleComponent,
    ListColumnComponent,
    ArcArticleComponent,
    ArcColumnComponent
  ],
  providers: [
    ContentService
  ]
})

export class ContentModule {}
