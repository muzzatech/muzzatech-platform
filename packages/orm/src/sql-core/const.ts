export type SupportedDBTypes = 'postgres';

export interface DBInfo {
  user: string;
  host: string;
  password: string;
  database: string;
  port: number;
}

export const DEFAULT_DB_TYPE = 'postgres';

export const DEFAULT_DB_INFO: DBInfo = {
  user: 'postgres',
  host: 'localhost',
  password: '',
  database: 'postgres',
  port: 5432,
};
