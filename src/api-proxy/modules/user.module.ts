import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserApiModule } from '../apis/user/user-api.module';
import { UserResolver } from '../resolvers/user/user.resolver';
import { UserService } from '../services/user/user.service';
import { GqlAuthLocalStrategy } from '../strategies/local.strategy';

@Module({
  imports: [PassportModule, UserApiModule],
  providers: [UserService, UserResolver, GqlAuthLocalStrategy],
})
export class UserModule {}
