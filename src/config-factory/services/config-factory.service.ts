import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppConfig } from '../configs/app/model';
import { NetworkConfig } from '../configs/network/model';

@Injectable()
export class ConfigFactoryService {
  constructor(private readonly configService: ConfigService) {}

  get app() {
    return Object.freeze({
      PORT: this.configService.get<number>('AppConfig.PORT'),
      NODE_ENV: this.configService.get<string>('AppConfig.NODE_ENV'),
      SESSION_SALT: this.configService.get<string>('AppConfig.SESSION_SALT'),
      SESSION_SECRET: this.configService.get<string>('AppConfig.SESSION_SECRET'),
    } satisfies AppConfig);
  }

  get network() {
    return Object.freeze({
      USER_BASE_URL: this.configService.get<string>('NetworkAdapter.USER_BASE_URL'),
      AUTH_BASE_URL: this.configService.get<string>('NetworkAdapter.AUTH_BASE_URL'),
    } satisfies NetworkConfig);
  }
}
