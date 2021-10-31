import { LogStrategy } from './LogStrategy';
import { LogManager } from './LogManager';

export class MuzzaLog {
  private _log: LogStrategy;

  constructor(name: string, ...params: Array<string>) {
    const l = LogManager.get();
    this._log = new l(name, ...params);
  }

  info(message: any, ...params: any[]): void {
    this.log.info(message, ...params);
  }

  error(message: any, ...params: any[]): void {
    this.log.error(message, ...params);
  }

  fatal(message: any, ...params: any[]): void {
    this.log.fatal(message, ...params);
  }

  warn(message: any, ...params: any[]): void {
    this.log.warn(message, ...params);
  }

  debug(message: any, ...params: any[]): void {
    this.log.debug(message, ...params);
  }

  trace(message: any, ...params: any[]): void {
    this.log.trace(message, ...params);
  }

  private get log(): LogStrategy {
    return this._log;
  }
}
