import { Controller, Req, Res } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

import { PostLogin } from '@/authentication/decorators/auth.decorators';
import { UseLocalAuthGuard } from '@/authentication/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  @PostLogin()
  @UseLocalAuthGuard()
  async login(@Res() res: FastifyReply, @Req() req: any) {
    // await res.setCookie('user', JSON.stringify(req.user));
    return res.send(req.user);
  }
}
