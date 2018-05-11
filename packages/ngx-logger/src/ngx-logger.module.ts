import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxLogger} from './ngx-logger.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class NgxLoggerModule {

  /**
   * For root module
   * @returns ModuleWithProviders
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxLoggerModule,
      providers: [NgxLogger]
    };
  }

  /**
   * For child modules
   * @returns ModuleWithProviders
   */
  static forChild(): ModuleWithProviders {
    return {
      ngModule: NgxLoggerModule
    };
  }
}
