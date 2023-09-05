import { fastifySecureSession } from '@fastify/secure-session';
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

  // TODO: use redis/mongo store
  // otherwise this app won't scale
  await app.register(fastifySecureSession, {
    key: ['one', 'two'], // TODO: put in config factory
    secret: configFactory.app.SESSION_SECRET, // TODO: put in config factory
    salt: configFactory.app.SESSION_SALT, // TODO: put in config factory

    // TODO: more options
    cookie: {
      maxAge: 60 * 60,
      secure: false, // TODO: for http, true for https
    },
  });

  // TODO: swagger open-api

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
