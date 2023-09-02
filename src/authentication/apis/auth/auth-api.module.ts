import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AuthApiService } from './auth-api.service';

@Module({
  imports: [HttpModule],
  providers: [AuthApiService],
  exports: [AuthApiService],
})
export class AuthApiModule {}
