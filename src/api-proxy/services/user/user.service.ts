import { Injectable } from '@nestjs/common';

import { UserApiService } from '@/api-proxy/apis/user/user-api.service';
import { UserInput } from '@/api-proxy/schemas/user/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userApiService: UserApiService) {}

  async findOne(userId: string) {
    return await this.userApiService.getUserById(userId);
  }

  async find() {
    return await this.userApiService.getUsers();
  }

  async add(userInput: UserInput) {
    return await this.userApiService.addUser(userInput);
  }
}
