
import {Injectable} from '@angular/core';

@Injectable()
export class DateService {
    fmtDate(): string {
        const date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const om = m < 10 ? ('0' + m) : m;
        const d = date.getDate();
        const od = d < 10 ? ('0' + d) : d;
        const h = date.getHours();
        const oh = h < 10 ? ('0' + h) : h;
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const oMinute = minute < 10 ? ('0' + minute) : minute;
        const oSecond = second < 10 ? ('0' + second) : second;
        return y + '-' + om + '-' + od + ' ' + oh + ':' + oMinute + ':' + oSecond;
    }
}
