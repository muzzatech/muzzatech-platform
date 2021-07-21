import * as log4js from 'log4js';
import { Log } from '../lib/Log';

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
  },
  categories: {
    default: { appenders: ['out'], level: 'all' },
  },
});

export class Log4JS implements Log {
  private _log!: log4js.Logger;

  constructor(name: string) {
    this._log = log4js.getLogger(name);
  }

  info(message: any, ...params: any[]): void {
    this._log.info(message, ...params);
  }

  error(message: any, ...params: any[]): void {
    this._log.error(message, ...params);
  }

  fatal(message: any, ...params: any[]): void {
    this._log.fatal(message, ...params);
  }

  warn(message: any, ...params: any[]): void {
    this._log.warn(message, ...params);
  }

  debug(message: any, ...params: any[]): void {
    this._log.debug(message, ...params);
  }

  trace(message: any, ...params: any[]): void {
    this._log.trace(message, ...params);
  }
}
