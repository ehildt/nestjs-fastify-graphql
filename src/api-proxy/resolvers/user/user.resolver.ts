import { Resolver } from '@nestjs/graphql';

import { ArgsUserInput, ArgUserId, MutationUser, QueryUser, QueryUsers } from '@/api-proxy/decorators/user.decorators';
import { UseGraphqlLocalAuthGuard } from '@/api-proxy/guards/gql-local-auth.guard';
import { UserInput } from '@/api-proxy/schemas/user/user.schema';
import { UserService } from '@/api-proxy/services/user/user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @QueryUser('getUser')
  async getUser(@ArgUserId() userId: string) {
    return await this.userService.findOne(userId);
  }

  @QueryUsers('getUsers')
  async getUsers() {
    return await this.userService.find();
  }

  @MutationUser('addUser')
  @UseGraphqlLocalAuthGuard()
  async addUsers(@ArgsUserInput() userInput: UserInput) {
    return await this.userService.add(userInput);
  }
}
