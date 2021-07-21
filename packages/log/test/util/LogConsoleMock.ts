import { Log } from '../../src';

export class LogConsole implements Log {
  info(message: any, ...params: any[]): void {
    console.log(message, ...params);
  }

  error(message: any, ...params: any[]): void {
    console.error(message, ...params);
  }

  fatal(message: any, ...params: any[]): void {
    console.error(message, ...params);
  }

  warn(message: any, ...params: any[]): void {
    console.warn(message, ...params);
  }

  debug(message: any, ...params: any[]): void {
    console.log(message, ...params);
  }

  trace(message: any, ...params: any[]): void {
    console.trace(message, ...params);
  }
}
