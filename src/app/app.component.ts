import {Component, OnInit} from '@angular/core';
import {BackendService} from './backend/backend.service';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService,
              private backend: BackendService) {
  }
}
