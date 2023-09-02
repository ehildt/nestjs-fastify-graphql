import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    // super() also takes additional properties, if required.
    // http://www.passportjs.org/concepts/authentication/strategies/
    super();
  }

  // passport will call this function automatically!
  // by default the local strategy's validate expects a username/password
  async validate(username: string, password: string) {
    const user = await this.authService.authenticate(username, password);
    if (!user) throw new UnauthorizedException();
    return { username, password };
  }
}
