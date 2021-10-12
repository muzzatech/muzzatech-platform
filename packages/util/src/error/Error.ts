export interface ErrorResponse {
  status: number;
  error: string;
  source: string;
}

export abstract class CoreError extends Error {
  private _source: string;
  private _status: number;

  constructor(source: string, message: string, status = 400) {
    super(message);
    this._source = source;
    this._status = status;
    this.name = this.constructor.name;
  }

  get status(): number {
    return this._status;
  }

  get source(): string {
    return this._source;
  }

  abstract getError(): ErrorResponse;
}
