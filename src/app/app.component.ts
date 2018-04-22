import {Component, OnInit} from '@angular/core';
import {NgxLog, NgxLoggerService} from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  log: NgxLog;

  constructor(private ngxLogger: NgxLoggerService) {
    this.log = this.ngxLogger.create('AppComponent');
  }

  ngOnInit(): void {
    this.log.info('Hello!');
    this.log.warn('Hello!');
    this.log.error('Hello!');
  }


}
