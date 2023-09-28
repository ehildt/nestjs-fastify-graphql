import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppConfig } from '../configs/app/model';
import { NetworkConfig } from '../configs/network/model';
import { SessionConfig } from '../configs/session/model';

@Injectable()
export class ConfigFactoryService {
  constructor(private readonly configService: ConfigService) {}

  get app() {
    return Object.freeze({
      PORT: this.configService.get<number>('AppAdapter.PORT'),
      NODE_ENV: this.configService.get<string>('AppAdapter.NODE_ENV'),
    } satisfies AppConfig);
  }

  get session() {
    return Object.freeze({
      SESSION_SALT: this.configService.get<string>('SessionAdapter.SESSION_SALT'),
      SESSION_SECRET: this.configService.get<string>('SessionAdapter.SESSION_SECRET'),
    } satisfies SessionConfig);
  }

  get network() {
    return Object.freeze({
      USER_BASE_URL: this.configService.get<string>('NetworkAdapter.USER_BASE_URL'),
      AUTH_BASE_URL: this.configService.get<string>('NetworkAdapter.AUTH_BASE_URL'),
    } satisfies NetworkConfig);
  }
}
