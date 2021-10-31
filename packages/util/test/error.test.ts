import 'jest';
import { MuzzaError, TestError } from './error';

describe('Test Module error', () => {
  test('Create MuzzaError And Validating if is Muzza', (done) => {
    const t = new TestError(new Error('Creating error from test'));
    const resultExpect = true;
    expect(MuzzaError.isMuzzaError(t)).toBe(resultExpect);
    done();
  });

  test('Create MuzzaError And Validating if isnt Muzza', (done) => {
    const t = new Error('Creating error from test');
    const resultExpect = false;
    expect(MuzzaError.isMuzzaError(t)).toBe(resultExpect);
    done();
  });

  test('Validating Error response', (done) => {
    const t = new TestError(new Error('Creating error from test'));
    const resultExpect = {
      source: 'TestError',
      status: 400,
      error: 'Creating error from test',
    };
    expect(JSON.stringify(t.getError())).toBe(JSON.stringify(resultExpect));
    done();
  });

  test('Validating Error response | FAIL', (done) => {
    const t = new TestError(new Error('Creating error from test'));
    const resultExpect = {
      source: 'ERROR',
      status: 200,
      error: 'create',
    };
    expect(JSON.stringify(t.getError())).not.toBe(JSON.stringify(resultExpect));
    done();
  });
});
