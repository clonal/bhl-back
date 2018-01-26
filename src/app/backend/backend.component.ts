import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../utils/logger.service';
import {BackendService} from './backend.service';
import {Observable} from 'rxjs/Observable';
import {Menu} from '../model/menu';


@Component({
    templateUrl: 'backend.component.html'
})

export class BackendComponent implements OnInit {
    banner$: Observable<Menu> | null = null;
    selectedMenu = 1;
    constructor(private logger: LoggerService, private backService: BackendService) {}

    ngOnInit(): void {
        this.banner$ = this.backService.getMenu('' + this.selectedMenu);
    }

    deleteImage(order: number): void {
/*        this.backService.deleteRootBanner(order, this.selectedMenu).toPromise().then((result) => {
                if (result) {
                    alert('deleteImage1 ' + result);
                    const index = this.banners.findIndex(b => b.order === order);
                    this.banners.splice(index, 1);
                }
            }
        );*/
    }

    editImage(order: number): void {
        this.backService.editRootBanner(order, this.selectedMenu).toPromise().then((result) => {
                alert('editImage ' + result);
            }
        );
    }
}
