import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppConfig } from '../app/model';
import { NetworkConfig } from '../network/model';

@Injectable()
export class ConfigFactoryService {
  constructor(private readonly configService: ConfigService) {}

  get app() {
    return Object.freeze({
      PORT: this.configService.get<number>('AppConfig.PORT'),
      NODE_ENV: this.configService.get<string>('AppConfig.NODE_ENV'),
      COOKIE_SECRET: this.configService.get<string>('AppConfig.COOKIE_SECRET'),
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
