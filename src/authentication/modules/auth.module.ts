import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthApiModule } from '../apis/auth/auth-api.module';
import { AuthController } from '../controllers/auth/auth.controller';
import { AuthService } from '../services/auth/auth.service';
import { AuthLocalStrategy } from '../strategies/local.strategy';

@Module({
  imports: [PassportModule, AuthApiModule],
  providers: [AuthService, AuthLocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
