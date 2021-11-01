type QueryManipulation = 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE';
interface Query {
  manipulation: QueryManipulation;
  table: string;
  columns?: string[];
  where?: Where;
  joins?: Join[];
  returning?: string[];
  values?: any[];
  orderBy?: OrderBy;
  limit?: number;
  offset?: number;
  groupBy?: string[];
  having?: Where;
}

export default class QueryBuilder {
  private queryStratergy: QueryStratergy;
  private builder: any;

  select() {
    return 0;
  }
  insert() {
    return 0;
  }
  update() {
    return 0;
  }
  delete() {
    return 0;
  }
  where() {
    return 0;
  }
  innerJoin() {
    return 0;
  }
  leftJoin() {
    return 0;
  }
  rightJoin() {
    return 0;
  }
  fullJoin() {
    return 0;
  }
  union() {
    return 0;
  }
  except() {
    return 0;
  }
  intersect() {
    return 0;
  }
  groupBy() {
    return 0;
  }
  having() {
    return 0;
  }
  orderBy() {
    return 0;
  }
  limit() {
    return 0;
  }
  offset() {
    return 0;
  }
}
