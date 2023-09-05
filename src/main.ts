import { fastifySecureSession } from '@fastify/secure-session';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { randomBytes } from 'crypto';

import { ConfigFactoryService } from './config-factory/services/config-factory.service';
import { MainModule } from './main.module';

void (async () => {
  const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter());
  const logger = app.get(ConsoleLogger);
  const configFactory = app.get(ConfigFactoryService);
  app.useGlobalPipes(VALIDATION_PIPE);

  // @REFINE - put the attributes into the config factory
  await app.register(fastifySecureSession, {
    sessionName: 'seed_session',
    cookieName: 'seed_cookie',
    prefix: 'seed',
    key: [randomBytes(32), randomBytes(32)],
    secret: configFactory.app.SESSION_SECRET,
    salt: configFactory.app.SESSION_SALT,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // one week
      secure: false, // false for http, true for https
    },
  });

  // !ENHANCEMENT - swagger open-api

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
