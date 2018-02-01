import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InfoService} from './info.service';

@Component({
  templateUrl: 'listComment.component.html'
})

export class ListCommentComponent {
  constructor (private router: Router,
               private route: ActivatedRoute,
               private infoService: InfoService) {}

  detail(id: number) {
    this.router.navigate(['' + id], {
      relativeTo: this.route
    });
  }
}
