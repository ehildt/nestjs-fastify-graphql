import Joi from 'joi';

import { appSchema } from './app.joi';
import { networkSchema } from './network.joi';

export const schema = Joi.object({
  ...appSchema,
  ...networkSchema,
});
