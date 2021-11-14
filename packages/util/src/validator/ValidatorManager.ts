import Joi, { AnySchema } from 'joi';

export { Joi as Validator };

class ValidatorManager {
  create(): Joi.Root {
    return Joi;
  }

  async validate(schema: AnySchema, data: any): Promise<any> {
    // eslint-disable-next-line no-useless-catch
    try {
      return await schema.validateAsync(data);
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      throw error;
    }
  }
}

const i: ValidatorManager = new ValidatorManager();
export { i as ValidatorManager };
