import Config from 'config';

class ConfigManager {
  has(a: string): boolean {
    return Config.has(a);
  }

  util(): Config.IUtil {
    return Config.util;
  }

  get<T>(a: string): T {
    return Config.get<T>(a);
  }
}

const i: ConfigManager = new ConfigManager();
export { i as ConfigManager };
