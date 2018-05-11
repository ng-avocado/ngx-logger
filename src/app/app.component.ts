import {Component, OnInit} from '@angular/core';
import {NgxLog, NgxLoggerService} from '@ng-avocado/ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  log: NgxLog = NgxLoggerService.create('AppComponent');
  log2: NgxLog = NgxLoggerService.create('AppComponent');

  constructor() {
  }

  ngOnInit(): void {
    const e = {error: 'Error message'};
    this.log.info('Hello!');
    this.log2.info('Hello!');
    this.log.warn('Hello!', e, e);
    this.log.error(e.error, e);
  }


}
