import { DBInfo } from './const';

export abstract class Database {
  protected config: DBInfo;

  constructor(config: DBInfo) {
    this.config = config;
  }

  protected abstract connect(): void;
  protected abstract disconnect(): void;
  abstract query(sql: string, params?: any[]): Promise<any>;

  protected async transaction(sql: string) {
    this.connect();
    try {
      await this.query('BEGIN');
      const result = await this.query(sql);
      await this.query('COMMIT');
      return result;
    } catch (e) {
      await this.query('ROLLBACK');
      throw e;
    } finally {
      this.disconnect();
    }
  }
}
