import Joi from 'joi';

import { CONFIG_YML } from '../configs/yml-reader/config.yml.reader';

export const appSchema = {
  PORT: CONFIG_YML?.app?.PORT ? Joi.number().default(CONFIG_YML.app.PORT) : Joi.number().required(),
  NODE_ENV: CONFIG_YML?.app?.NODE_ENV ? Joi.string().default(CONFIG_YML.app.NODE_ENV) : Joi.string().required(),

  SESSION_SECRET: CONFIG_YML?.app?.SESSION_SECRET
    ? Joi.string().default(CONFIG_YML.app.SESSION_SECRET)
    : Joi.string().required(),

  SESSION_SALT: CONFIG_YML?.app?.SESSION_SALT
    ? Joi.string().default(CONFIG_YML.app.SESSION_SALT)
    : Joi.string().required(),
};
