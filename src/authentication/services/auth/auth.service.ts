import { Injectable } from '@nestjs/common';

import { AuthApiService } from '@/authentication/apis/auth/auth-api.service';

@Injectable()
export class AuthService {
  constructor(private readonly authApiService: AuthApiService) {}

  async authenticate(username: string, password: string) {
    return await this.authApiService.authenticate(username, password);
  }
}
