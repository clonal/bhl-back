import {Component} from '@angular/core';
import {ContentService} from './content.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: 'listColumn.component.html'
})

export class ListColumnComponent {
  constructor(private contentService: ContentService,
              private router: Router,
              private route: ActivatedRoute) {}

  deleteColumn(id: number) {
    this.contentService.deleteColumn(id);
  }

  editColumn(id: number) {
    this.router.navigate(['' + id], { relativeTo: this.route });
  }

  addColumn(type: number, parent: number) {
    if (type === 0) {
      this.router.navigate(['add'], {
        queryParams: { 'type': '' + type },
        relativeTo: this.route
      });
    } else {
      this.router.navigate(['add'], {
        queryParams: { 'type': '' + type, 'parent': '' + parent },
        relativeTo: this.route
      });
    }
  }
}
