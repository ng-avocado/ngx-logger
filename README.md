<p align="center">
  <a href="https://github.com/ng-avocado/ngx-logger">
    <img alt="Gulp-Yarn" src="https://github.com/warapitiya/assets/blob/master/ngx-logger.png?raw=true" width="546">
  </a>
</p>

<p align="center">
  :cyclone: Creative logger for Angular
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@ng-avocado/ngx-logger"><img src="https://img.shields.io/npm/v/@ng-avocado/ngx-logger.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@ng-avocado/ngx-logger"><img src="https://img.shields.io/npm/dt/@ng-avocado/ngx-logger.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/@ng-avocado/ngx-logger"><img src="https://img.shields.io/npm/l/@ng-avocado/ngx-logger.svg" alt="module license"></a>
  <a href="https://www.npmjs.com/package/@ng-avocado/ngx-logger"><img src="https://img.shields.io/bundlephobia/min/@ng-avocado/ngx-logger.svg" alt="npm size"></a>
</p>


## Getting started
```sh
$ yarn add @ng-avocado/ngx-logger
```

## Add to Angular module
```ts
import {NgxLoggerModule} from '@ng-avocado/ngx-logger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLoggerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Use it everywhere
```ts
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
```
