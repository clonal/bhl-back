import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {InfoService} from './info.service';
import {Comment} from '../model/comment';

@Component({
  templateUrl: 'arcComment.component.html'
})

export class ArcCommentComponent implements OnInit {
  comment$: Observable<Comment> | null = null;
  constructor (private route: ActivatedRoute,
               private infoService: InfoService) {}

  ngOnInit(): void {
    this.comment$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.infoService.getComment(params.get('id'));
      });
  }
}
