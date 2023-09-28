import { registerAs } from '@nestjs/config';

import { SessionAdapter } from './adapter';

export const SessionRegistry = registerAs('SessionAdapter', () => new SessionAdapter());
