import {Component, Input} from '@angular/core';
import {Menu} from '../model/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sideNav.component.html'
})

export class SideNavComponent {
  @Input() menus: Menu[];
  constructor() {}
}
