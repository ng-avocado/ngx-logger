import {Component, OnInit} from '@angular/core';
import {NgxLog, NgxLogger} from '@ng-avocado/ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  log: NgxLog = NgxLogger.create('AppComponent');

  constructor() {
  }

  ngOnInit(): void {
    this.log.info('Yay!, This is cool.');
    this.log.error('Opps!', new Error('Happy error'));
  }
}
