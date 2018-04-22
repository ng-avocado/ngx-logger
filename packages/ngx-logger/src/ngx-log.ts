import {LoggerConfig} from './logger-config';

export class NgxLog {
  constructor(private config: LoggerConfig) {
  }

  private static message(
    message: string | any,
    params: any[],
    moduleName: string,
    moduleColor: string,
    color: string
  ) {
    const isEdgeOrIe8orAbove = (document['documentMode'] || /Edge/.test(navigator.userAgent));

    if (isEdgeOrIe8orAbove) {
      if (typeof message === 'string') {
        const a1 = '[[ ' + moduleName + ' ]] ' + message + ' ';
        params.unshift(a1);
      } else {
        const a1 = '[[ ' + moduleName + ']] ';
        params.push(message);
        params.unshift(a1);
      }
      console.info.apply(console, params);
    } else {
      if (typeof message === 'string') {
        const a1 = '%c ' + moduleName + '  %c ' + message + ' ';
        const a2 = 'background: ' + moduleColor + ';color:white; border: 1px solid ' + moduleColor + '; ';
        const a3 = 'border: 1px solid ' + color + '; ';
        params.unshift(a3);
        params.unshift(a2);
        params.unshift(a1);
      } else {
        const a1 = '%c ' + moduleName + ' ';
        const a2 = 'background: ' + moduleColor + ';color:white; border: 1px solid ' + color + '; ';
        params.push(message);
        params.unshift(a2);
        params.unshift(a1);
      }
      console.log.apply(console, params);
    }
  }

  info(mes: any): void {
    NgxLog.message(mes, [], this.config.name, this.config.color, 'deepskyblue');
  }

  error(mes: any): void {
    NgxLog.message(mes, [], this.config.name, this.config.color, 'red');
  }

  warn(mes: any): void {
    NgxLog.message(mes, [], this.config.name, this.config.color, 'orange');
  }

  debug(mes: any): void {
    NgxLog.message(mes, [], this.config.name, this.config.color, 'orange');
  }
}
