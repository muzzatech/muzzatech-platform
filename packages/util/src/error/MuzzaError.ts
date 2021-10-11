import { CoreError, ErrorResponse } from './Error';

export class MuzzaError extends CoreError {
  getError(): ErrorResponse {
    return {
      source: this.source,
      status: this.status,
      error: this.message,
    };
  }

  static GenericError(message: string): MuzzaError {
    return new GenericError(message);
  }

  static isMuzzaError(err: Error | MuzzaError): boolean {
    return err instanceof MuzzaError;
  }

  static validAndCreate(err: Error | MuzzaError): MuzzaError {
    if (!MuzzaError.isMuzzaError(err)) {
      return MuzzaError.GenericError(err.message);
    }

    return err as MuzzaError;
  }
}

class GenericError extends MuzzaError {
  constructor(message: string) {
    super('Generic', message, 400);
  }
}
