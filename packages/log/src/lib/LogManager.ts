import { Log, LogGenerate } from './Log';
import { LogFactory } from './LogFactory';

class LogManager {
  define(logClass: LogGenerate) {
    LogFactory.setLogger(logClass);
  }

  get(...params: Array<any>): Log {
    return LogFactory.getLogger(...params);
  }
}

const i: LogManager = new LogManager();
export { i as LogManager };
