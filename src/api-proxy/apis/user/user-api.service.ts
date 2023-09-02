import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { User, UserInput } from '@/api-proxy/schemas/user/user.schema';
import { ConfigFactoryService } from '@/config-factory/services/config-factory.service';

export const MOCK_USERS: Array<User | UserInput> = [
  {
    userId: '1',
    username: 'Gandalf',
    password: 'SpellCraft',
    email: 'spell@craft.com',
  },
  {
    userId: '2',
    username: 'Gollum',
    password: 'MeinSchatz',
    email: 'mein@schatz.com',
  },
];

@Injectable()
export class UserApiService {
  constructor(
    protected readonly httpService: HttpService,
    protected readonly configFactory: ConfigFactoryService,
  ) {}

  async getUserById(userId: string) {
    // return await firstValueFrom(
    //   this.httpService
    //     .get<User>(`users/${userId}`, {
    //       baseURL: this.configFactory.network.USER_BASE_URL,
    //     })
    //     .pipe(
    //       catchError((error: AxiosError) => {
    //         throw error;
    //       }),
    //     ),
    // );

    return await Promise.resolve(MOCK_USERS.find((user) => user.userId === userId));
  }

  async getUsers() {
    // return await firstValueFrom(
    //   this.httpService
    //     .get<Array<User>>('users', {
    //       baseURL: this.configFactory.network.USER_BASE_URL,
    //     })
    //     .pipe(
    //       catchError((error: AxiosError) => {
    //         throw error;
    //       }),
    //     ),
    // );

    return await Promise.resolve(MOCK_USERS);
  }

  async addUser(userInput: UserInput) {
    // return await firstValueFrom(
    //   this.httpService
    //     .get<Array<User>>('users', {
    //       baseURL: this.configFactory.network.USER_BASE_URL,
    //     })
    //     .pipe(
    //       catchError((error: AxiosError) => {
    //         throw error;
    //       }),
    //     ),
    // );

    MOCK_USERS.push(userInput);
    return await Promise.resolve(MOCK_USERS.find((user) => user.userId === userInput.userId));
  }
}
