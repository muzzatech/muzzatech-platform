import { LogStrategyGenerate } from './LogStrategy';
import { Log4JS } from '../default/Log4js';

class LogManager {
  private _log!: LogStrategyGenerate;

  define(strategy: LogStrategyGenerate) {
    this._log = strategy;
  }

  get(): LogStrategyGenerate {
    if (!this._log) {
      this.define(Log4JS);
      console.log(
        `LogStrategy not found, Please use LogManager.define, use default logger`,
      );
    }
    return this._log;
  }
}

const i: LogManager = new LogManager();
export { i as LogManager };
