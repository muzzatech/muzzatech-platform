export interface Log {
  info(message: any, ...params: Array<any>): void;
  error(message: any, ...params: Array<any>): void;
  fatal(message: any, ...params: Array<any>): void;
  warn(message: any, ...params: Array<any>): void;
  debug(message: any, ...params: Array<any>): void;
  trace(message: any, ...params: Array<any>): void;
}

export interface LogGenerate {
  new (...params: Array<any>): Log;
}
