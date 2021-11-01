import { DBInfo } from './const';

export abstract class Database {
  protected config: DBInfo;
  protected abstract connect(): void;
  abstract query(sql: string, params: any[]): Promise<any>;
  constructor(config: DBInfo) {
    this.config = config;
  }
}
