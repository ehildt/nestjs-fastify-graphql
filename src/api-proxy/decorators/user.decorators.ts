import { ID } from '@nestjs/graphql';

import { User, UserInput } from '../schemas/user/user.schema';
import { argify, mutatify, querify } from './_helpers';

export const ArgUserId = argify('userId', { type: () => ID });
export const ArgsUserInput = argify('input', { type: () => UserInput });

export const QueryUser = querify(() => User);
export const QueryUsers = querify(() => [User]);
export const MutationUser = mutatify(() => User);
