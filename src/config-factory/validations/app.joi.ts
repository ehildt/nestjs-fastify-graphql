import Joi from 'joi';

import { CONFIG_YML } from '../configs/yml-loader/config.yml.reader';

export const appSchema = {
  PORT: CONFIG_YML?.app?.PORT ? Joi.number().default(CONFIG_YML.app.PORT) : Joi.number().required(),
  NODE_ENV: CONFIG_YML?.app?.NODE_ENV ? Joi.string().default(CONFIG_YML.app.NODE_ENV) : Joi.string().required(),
};
