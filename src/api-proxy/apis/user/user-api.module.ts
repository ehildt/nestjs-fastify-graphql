import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { UserApiService } from './user-api.service';

@Module({
  imports: [HttpModule],
  providers: [UserApiService],
  exports: [UserApiService],
})
export class UserApiModule {}
