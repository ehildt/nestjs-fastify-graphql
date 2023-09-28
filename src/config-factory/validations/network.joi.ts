import Joi from 'joi';

import { CONFIG_YML } from '../configs/yml-loader/config.yml.reader';

export const networkSchema = {
  USER_BASE_URL: CONFIG_YML?.network.USER_BASE_URL
    ? Joi.string().default(CONFIG_YML.network.USER_BASE_URL)
    : Joi.string().required(),

  AUTH_BASE_URL: CONFIG_YML?.network.AUTH_BASE_URL
    ? Joi.string().default(CONFIG_YML.network.AUTH_BASE_URL)
    : Joi.string().required(),
};
