import {
  Args,
  ArgsOptions,
  Mutation,
  MutationOptions,
  Query,
  QueryOptions,
  Subscription,
  SubscriptionOptions,
} from '@nestjs/graphql';

export function argify(name: string, options?: ArgsOptions) {
  return () => Args(name, options);
}

export function querify(cb: () => any, options?: QueryOptions) {
  return (name: string) => Query(cb, { ...options, name });
}

export function mutatify(cb: () => any, options?: MutationOptions) {
  return (name: string) => Mutation(cb, { ...options, name });
}

export function subscriptify(cb: () => any, options?: SubscriptionOptions) {
  return (name: string) => Subscription(cb, { ...options, name });
}
