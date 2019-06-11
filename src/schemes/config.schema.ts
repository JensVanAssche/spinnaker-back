import * as Joi from "joi";

export const configSchema = {
  getAll: {
    params: {
      childId: Joi.string().guid()
    }
  },
  updateConfig: {
    body: Joi.object({
      data: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          gameDisplayName: Joi.string().required(),
          parameterName: Joi.string().required(),
          parameterValue: Joi.string().required(),
          enabled: Joi.boolean().required()
        })
      )
    })
  }
};
