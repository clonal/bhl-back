import {Component} from '@angular/core';
import {InfoService} from './info.service';

@Component({
  templateUrl: 'listFeedback.component.html'
})

export class ListFeedbackComponent {
  constructor (private infoService: InfoService) {}

  deleteFeedback(id: number) {
    this.infoService.deleteFeedback(id);
  }
}
