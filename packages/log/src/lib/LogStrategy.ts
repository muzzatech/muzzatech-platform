export interface LogStrategy {
  info(message: any, ...params: Array<any>): void;
  error(message: any, ...params: Array<any>): void;
  fatal(message: any, ...params: Array<any>): void;
  warn(message: any, ...params: Array<any>): void;
  debug(message: any, ...params: Array<any>): void;
  trace(message: any, ...params: Array<any>): void;
}

export interface LogStrategyGenerate {
  new (name: string, ...params: Array<any>): LogStrategy;
}
