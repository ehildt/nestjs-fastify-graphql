import { Controller, Req, Res } from '@nestjs/common';

import { PostLogin } from '@/authentication/decorators/auth.decorators';
import { UseLocalAuthGuard } from '@/authentication/guards/local-auth.guard';
import { FastifyReq, FastifyRes } from '@/authentication/interfaces/fastify.model';

@Controller('auth')
export class AuthController {
  @PostLogin()
  @UseLocalAuthGuard()
  async login(@Res() res: FastifyRes, @Req() req: FastifyReq) {
    // await res.setCookie('user', JSON.stringify(req.user));
    return res.send(req.user);
  }
}
