import { registerAs } from '@nestjs/config';

import { AppConfigAdapter } from './adapter';

export const AppConfigRegistry = registerAs('AppAdapter', async () => new AppConfigAdapter());
