import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppConfigRegistry } from '../configs/app/registry';
import { NetworkRegistry } from '../configs/network/registry';
import { ConfigFactoryService } from '../services/config-factory.service';
import { schema } from '../validations/schema';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      ignoreEnvFile: true,
      load: [AppConfigRegistry, NetworkRegistry],
      validationSchema: schema,
    }),
  ],
  providers: [ConfigFactoryService],
  exports: [ConfigFactoryService],
})
export class ConfigFactoryModule {}
