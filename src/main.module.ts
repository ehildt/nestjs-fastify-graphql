import { ConsoleLogger, Module } from '@nestjs/common';

import { ApiProxyModule } from './api-proxy/modules/api-proxy.module';
import { AuthModule } from './authentication/modules/auth.module';
import { ConfigFactoryModule } from './config-factory/modules/config-factory.module';

@Module({
  imports: [ConfigFactoryModule, ApiProxyModule, AuthModule],
  providers: [ConsoleLogger],
})
export class MainModule {}
