import {Injectable} from '@angular/core';
import {Feedback} from '../model/feedback';
import {HttpClient} from '@angular/common/http';
import {LoggerService} from '../utils/logger.service';
import {Comment} from '../model/comment';

@Injectable()
export class InfoService {
  feedbacks: Feedback[];
  comments: Comment[];
  constructor (private client: HttpClient,
               private logger: LoggerService) {
    this.initFeedbacks();
    this.initComments();
  }

  initFeedbacks() {
    this.client.get('/api/feedback/listFeedbacks')
      .subscribe(result => {
        this.feedbacks = result as Feedback[];
      });
  }

  initComments() {
    this.client.get('/api/product/listComments')
      .subscribe(result => {
        this.comments = result as Comment[];
      });
  }

  deleteFeedback(id: number) {
    this.client.post('/api/feedback/deleteFeedback/' + id, {})
      .subscribe(result => {
        if (result['info']) {
          this.logger.debug(result['info']);
          this.initFeedbacks();
        }
      });
  }

  getComment(id: string | any) {
    return this.client.get('/api/product/findComment/' + id).map(result => {
      if (result['comment']) {
        return result['comment'] as Comment;
      } else {
        return null;
      }
    });
  }
}
