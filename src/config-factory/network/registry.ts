import { registerAs } from '@nestjs/config';

import { NetworkAdapter } from './adapter';

export const NetworkRegistry = registerAs('NetworkAdapter', () => new NetworkAdapter());
