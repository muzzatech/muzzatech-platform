## @muzzatech/log

- This package is plugin to kwan platform
- This package use [log4js](https://github.com/log4js-node/log4js-node) log default

# How to use

- [default](!default-example)
- [custom](!custom-example)

## Default Example

```typescript

import { LogManager, Log } from '@muzzatech/log';

class FakeLog {
  private Log: Log;

  constructor() {
    this.Log = LogManager.get("Fake Log Class");
  }

  run(): void {
    this.Log.info("Hello World!!");
    this.Log.error("Hello World!!");
    this.Log.fatal("Hello World!!");
    this.Log.warn("Hello World!!");
    this.Log.debug("Hello World!!");
    this.Log.trace("Hello World!!");
  }
}

```

## Result

```log
[2021-06-10 13:22:41.289] [INFO] [FAKE LOG CLASS] - Hello World!! 
[2021-06-10 13:22:41.289] [ERROR] [FAKE LOG CLASS] - Hello World!! 
[2021-06-10 13:22:41.289] [FATAL] [FAKE LOG CLASS] - Hello World!! 
[2021-06-10 13:22:41.289] [WARN] [FAKE LOG CLASS] - Hello World!! 
[2021-06-10 13:22:41.289] [DEBUG] [FAKE LOG CLASS] - Hello World!! 
[2021-06-10 13:22:41.289] [TRACE] [FAKE LOG CLASS] - Hello World!! 
```

## Custom Example

```typescript
import { Log, LogManager } from '@muzzatech/log';

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

const main = (): void => {
  LogManager.define(LogConsole);
  const Log = LogManager.get("Console Log");

  Log.info("Hello World!!");
  Log.error("Hello World!!");
  Log.fatal("Hello World!!");
  Log.warn("Hello World!!");
  Log.debug("Hello World!!");
  Log.trace("Hello World!!");
}

main();
```