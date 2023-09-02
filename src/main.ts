// import { fastifyCookie } from '@fastify/cookie';
// import { fastifySession } from '@fastify/session';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { ConfigFactoryService } from './config-factory/services/config-factory.service';
import { MainModule } from './main.module';

void (async () => {
  const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter());
  const logger = app.get(ConsoleLogger);
  const configFactory = app.get(ConfigFactoryService);
  app.useGlobalPipes(VALIDATION_PIPE);
  // TODO: use a mongo store for persist the session
  // TODO: save the session id in a cookie
  // await app.register(fastifyCookie, { secret: configFactory.app.COOKIE_SECRET });
  // await app.register(fastifySession, { secret: configFactory.app.SESSION_SECRET });
  await app.listen(configFactory.app.PORT, '0.0.0.0');
  logger.log({ APP: configFactory.app, NETWORK: configFactory.network }, 'CONFIG');
  logger.log(`http://localhost:${configFactory.app.PORT}/graphql`, 'GRAPHQL');
  logger.log(`http://localhost:${configFactory.app.PORT}`, 'REST');
})();

const VALIDATION_PIPE = new ValidationPipe({
  whitelist: true,
  forbidNonWhitelisted: true,
  forbidUnknownValues: true,
  transform: true,
  transformOptions: {
    enableImplicitConversion: false,
  },
});
