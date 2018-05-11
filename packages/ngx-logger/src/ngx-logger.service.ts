import {Injectable} from '@angular/core';
import {LoggerConfig} from './logger-config';
import {NgxLog} from './ngx-log';

@Injectable()
export class NgxLogger {
  private static assignedColors: Map<string, string> = new Map<string, string>();
  private static elements: Set<string> = new Set<string>();

  constructor() {
  }

  private static pickColor(): string {
    let color = this.getRandomColor();
    while (this.elements.has(color)) {
      color = this.getRandomColor();
    }
    this.elements.add(color);
    return color;
  }

  /**
   * Get random color
   * @returns string
   */
  private static getRandomColor(): string {
    return '#' + '0123456789abcdef'.split('').map(function (v, i, a) {
      return i > 5 ? null : a[Math.floor(Math.random() * 16)];
    }).join('');
  }

  static create(name: string): NgxLog {
    if (this.assignedColors.has(name)) {
      const color = this.assignedColors.get(name);
      const config = <LoggerConfig>{color, name};
      return new NgxLog(config);
    } else {
      const color = this.pickColor();
      const config = <LoggerConfig>{color, name};
      this.assignedColors.set(name, color);
      return new NgxLog(config);
    }

  }

}
