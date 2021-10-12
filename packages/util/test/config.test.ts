import { ConfigManager } from '../src';

describe('Test Module Config', () => {
  test('verify', (done) => {
    const port = ConfigManager.get('db.port');
    expect(port).toBe(5432);
    const host = ConfigManager.get('db.host');
    expect(host).toBe('localhost');
    const name = ConfigManager.get('name');
    expect(name).toBe('testing');
    done();
  });
});
