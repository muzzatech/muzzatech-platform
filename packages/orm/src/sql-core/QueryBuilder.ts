type QueryManipulation = 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE';
type Direction = 'ASC' | 'DESC';
type Operator =
  | '='
  | '!='
  | '<'
  | '<='
  | '>'
  | '>='
  | 'LIKE'
  | 'NOT LIKE'
  | 'IN'
  | 'NOT IN';

interface Query {
  type: QueryManipulation;
  query: SelectQuery | InsertQuery | UpdateQuery | DeleteQuery;
}
interface CommonQuery {
  table: string;
  columns: string[];
}
interface SelectQuery extends CommonQuery {
  where: Where;
  joins?: Join[];
  orderBy?: OrderBy[];
  limit?: number;
  offset?: number;
  groupBy?: string[];
  //having?: Where;
}

interface InsertQuery extends CommonQuery {
  values: any[];
}

interface UpdateQuery extends CommonQuery {
  values: any[];
  where?: Where;
}

interface DeleteQuery {
  table: string;
  where: Where;
}

interface Join {
  table: string;
  type: 'INNER' | 'LEFT' | 'RIGHT' | 'FULL';
  on: Where;
}

interface OrderBy {
  column: string;
  direction: Direction;
}

interface Where {
  column: string;
  operator: Operator;
  value: string | string[] | number | number[] | boolean | Date;
}

interface Between {
  operator: 'BETWEEN';
  from: string | number;
  to: string | number;
}

interface Manipulator {
  query: Query;
  select(table: string, columns: string[]): Conditions;
  insert(table: string, columns: string[], values: any[]): Conditions;
  update(
    table: string,
    columns: string[],
    values: any[],
    where: Where,
  ): Conditions;
  delete(table: string, where: Where): Conditions;
}

interface Conditions {
  query: Query;
  join(table: string, on: Where): Conditions;
  orderBy(column: string, direction: Direction): Conditions;
  limit(limit: number): Conditions;
  offset(offset: number): Conditions;
  where(where: Where): Conditions;
  groupBy(columns: string[]): Conditions;
  having(where: Where): Conditions;
  build(): string;
}

export class ManipulationBuilder implements Manipulator {
  private query!: Query;
  select(table: string, columns: string[]): Conditions {
    throw new Error('Method not implemented.');
  }
  insert(table: string, columns: string[], values: any[]): Conditions {
    throw new Error('Method not implemented.');
  }
  update(
    table: string,
    columns: string[],
    values: any[],
    where: Where,
  ): Conditions {
    throw new Error('Method not implemented.');
  }
  delete(table: string, where: Where): Conditions {
    throw new Error('Method not implemented.');
  }
}
