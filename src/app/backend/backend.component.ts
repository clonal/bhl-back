import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../utils/logger.service';
import {BackendService} from './backend.service';
import {Menu} from '../model/menu';
import {Banner} from '../model/banner';


@Component({
    templateUrl: 'backend/backend.component.html'
})

export class BackendComponent implements OnInit {
    banners: Banner[];
    selectedMenu = 1;
    constructor(private logger: LoggerService, private backService: BackendService) {}

    ngOnInit(): void {
        this.backService.getBanners().subscribe((result) => {
            this.banners = result as Banner[];
        }
        );
    }

    onSelect(menuId: number): void {
        this.logger.debug('click menu ' + menuId);
    }

    deleteImage(order: number): void {
        this.backService.deleteRootBanner(order, this.selectedMenu).toPromise().then((result) => {
                if (result) {
                    alert('deleteImage1 ' + result);
                    const index = this.banners.findIndex(b => b.order === order);
                    this.banners.splice(index, 1);
                }
            }
        );
    }

    editImage(order: number): void {
        this.backService.editRootBanner(order, this.selectedMenu).toPromise().then((result) => {
                alert('editImage ' + result);
            }
        );
    }
}
