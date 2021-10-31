import 'jest';
import { UserTest, UserTestSchema, validSchema } from './validator';

describe('Test Module Validator', () => {
  test('Create User Schema | OK', async () => {
    const userTest: UserTest = {
      nombre: 'user',
      edad: 30,
    };

    await expect(validSchema(UserTestSchema, userTest)).resolves.toStrictEqual(
      userTest,
    );
  });

  test('Create User Schema | FAIL | REQUIRED NAME', async () => {
    const userTest: UserTest = {
      edad: 30,
    };

    await expect(validSchema(UserTestSchema, userTest)).rejects.toThrowError(
      '"nombre" is required',
    );
  });

  test('Create User Schema | FAIL | REQUIRED AGE', async () => {
    const userTest: UserTest = {
      nombre: 'Juan',
    };

    await expect(validSchema(UserTestSchema, userTest)).rejects.toThrowError(
      '"edad" is required',
    );
  });
});
