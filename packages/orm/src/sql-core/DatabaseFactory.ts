import PostgresDatabase from './postgres/PostgresDatabase';
import {
  DBInfo,
  SupportedDBTypes,
  DEFAULT_DB_INFO,
  DEFAULT_DB_TYPE,
} from './const';

export default class DatabaseFactory {
  private dbInfo: DBInfo;
  private type: SupportedDBTypes;
  private DATABASES: any;

  constructor(type: SupportedDBTypes, dbInfo: DBInfo) {
    this.dbInfo = dbInfo ?? DEFAULT_DB_INFO;
    this.type = type ?? DEFAULT_DB_TYPE;
    this.DATABASES = {
      postgres: (dbInfo: DBInfo) => new PostgresDatabase(dbInfo),
    };
  }

  async getDatabase() {
    try {
      return this.DATABASES[this.type](this.dbInfo);
    } catch (e) {
      throw new Error(`Database ${this.type} is not supported`);
    }
  }
}
