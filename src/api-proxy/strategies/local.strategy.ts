import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { FastifyRequest } from 'fastify';
import { Strategy } from 'passport-local';

import { UserService } from '../services/user/user.service';

@Injectable()
export class GqlAuthLocalStrategy extends PassportStrategy(Strategy, 'gqllocal') {
  constructor(private readonly userService: UserService) {
    // super() also takes additional properties, if required.
    // http://www.passportjs.org/concepts/authentication/strategies/
    super({ passReqToCallback: true });
  }

  // passport will call this function automatically!
  // by default the local strategy's validate expects a username/password
  async validate(req: FastifyRequest) {
    const user = await this.userService.findOne((req.body as any).userId);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
