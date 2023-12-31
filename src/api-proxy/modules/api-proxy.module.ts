import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { GRAPHQL_PUBSUB } from '../constants/graphql';
import { UserModule } from './user.module';

const playground =
  process.env.NODE_ENV === 'local'
    ? {
        title: 'SEED',
        version: '1',
        endpoint: '/graphql',
        subscriptionEndpoint: '/subscriptions',
      }
    : {};

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground,
      autoSchemaFile: true,
      subscriptions: {
        'graphql-ws': {
          path: '/subscriptions',
        },
      },
    }),
  ],
  providers: [
    {
      provide: GRAPHQL_PUBSUB,
      useValue: new PubSub(),
    },
  ],
  exports: [GRAPHQL_PUBSUB],
})
export class ApiProxyModule {}
