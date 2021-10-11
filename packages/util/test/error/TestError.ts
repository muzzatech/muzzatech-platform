import { MuzzaError } from '../../src';

export { MuzzaError };

export class TestError extends MuzzaError {
  constructor(error: Error) {
    super('TestError', error.message, 400);
  }

  static create(): TestError {
    return new TestError(new Error('Creating Error'));
  }
}
