import Joi from 'joi';

import { CONFIG_YML } from '../configs/yml-loader/config.yml.reader';

export const sessionSchema = {
  SESSION_SECRET: CONFIG_YML?.session?.SESSION_SECRET
    ? Joi.string().default(CONFIG_YML.session.SESSION_SECRET)
    : Joi.string().required(),

  SESSION_SALT: CONFIG_YML?.session?.SESSION_SALT
    ? Joi.string().default(CONFIG_YML.session.SESSION_SALT)
    : Joi.string().required(),
};
