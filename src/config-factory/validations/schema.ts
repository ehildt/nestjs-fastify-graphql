import Joi from 'joi';

import { appSchema } from './app.joi';
import { networkSchema } from './network.joi';
import { sessionSchema } from './session.joi';

export const schema = Joi.object({
  ...appSchema,
  ...networkSchema,
  ...sessionSchema,
});
