import { LogManager, Logger } from '../src/';
import { LogConsole } from './util/LogConsoleMock';

describe('LOG TEST', () => {
  it('first health test | console.log', (done) => {
    console.log = jest.fn();
    console.log('Hello World!!');
    expect(console.log).toHaveBeenCalledWith('Hello World!!');
    done();
  });

  it('Use Default Logger | LOG4JS', (done) => {
    const Log = new Logger('MuzzaTech Logger');
    Log.info = jest.fn();
    Log.info('Hello World!!');
    expect(Log.info).toHaveBeenCalledWith('Hello World!!');
    done();
  });

  it('Use Created Logger based to console.log', (done) => {
    LogManager.define(LogConsole);
    const Log = new Logger('Console Log');
    Log.info = jest.fn();
    Log.info('Hello World!!');
    expect(Log.info).toHaveBeenCalledWith('Hello World!!');
    done();
  });
});
