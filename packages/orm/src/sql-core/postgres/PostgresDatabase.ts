import { Pool } from 'pg';
import { DBInfo } from '../const';
import { Database } from '../Database';

export default class PostgresDatabase extends Database {
  private pool: Pool;

  constructor(config: DBInfo) {
    super(config);
    this.pool = new Pool({
      user: this.config.user,
      host: this.config.host,
      database: this.config.database,
      password: this.config.password,
      port: this.config.port,
    });
  }

  protected async connect() {
    this.pool.connect();
  }

  protected async disconnect() {
    this.pool.end();
  }

  async query(sql: string, params: any[] = []) {
    const { rows } = await this.pool.query(sql, params);
    return rows;
  }
}
