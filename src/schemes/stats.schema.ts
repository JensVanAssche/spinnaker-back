import * as Joi from "joi";

export const statsSchema = {
  getStats: {
    params: {
      childId: Joi.string().guid()
    }
  },
  createStat: Joi.object({
    childId: Joi.string().guid(),
    gameCodeName: Joi.string().required(),
    statValue: Joi.string().required(),
    time: Joi.string().required()
  })
};
