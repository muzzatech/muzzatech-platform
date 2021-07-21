import { Log, LogGenerate } from './Log';
import { Log4JS } from '../default/Log4js';

class LogFactory {
  private _log!: LogGenerate;

  constructor() {
    this._log = Log4JS;
  }

  setLogger(log: LogGenerate) {
    this._log = log;
  }

  getLogger(...params: Array<any>): Log {
    return new this._log(...params);
  }
}

const i: LogFactory = new LogFactory();
export { i as LogFactory };
