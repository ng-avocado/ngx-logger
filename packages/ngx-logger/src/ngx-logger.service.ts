import {Injectable} from '@angular/core';
import {LoggerConfig} from './logger-config';
import {NgxLog} from './ngx-log';

@Injectable()
export class NgxLoggerService {
  private elements: Set<string> = new Set<string>();

  constructor() {
  }

  /**
   * Get random color
   * @returns string
   */
  private getRandomColor(): string {
    return '#' + '0123456789abcdef'.split('').map(function (v, i, a) {
      return i > 5 ? null : a[Math.floor(Math.random() * 16)];
    }).join('');
  }

  private pickColor(): string {
    let color = this.getRandomColor();
    while (this.elements.has(color)) {
      color = this.getRandomColor();
    }
    this.elements.add(color);
    return color;
  }

  create(name: string): NgxLog {
    const color = this.pickColor();
    const config = <LoggerConfig>{color, name};
    return new NgxLog(config);
  }

}
