import { ValidatorManager } from '../../src';

export const validSchema = (schema: any, toValid: any) => {
  return ValidatorManager.validate(schema, toValid);
};

export interface UserTest {
  nombre?: string;
  edad?: number;
}

const schema = ValidatorManager.create();

export const UserTestSchema = schema.object({
  nombre: schema.string().required(),
  edad: schema.number().required(),
});
