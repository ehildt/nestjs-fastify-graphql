import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { LoginDto } from '@/authentication/dtos/auth/auth.dto';
import { ConfigFactoryService } from '@/config-factory/services/config-factory.service';

export const MOCK_AUTH: Array<LoginDto> = [
  {
    username: 'Gandalf',
    password: '1234',
  },
];

@Injectable()
export class AuthApiService {
  constructor(
    protected readonly httpService: HttpService,
    protected readonly configFactory: ConfigFactoryService,
  ) {}

  async authenticate(username: string, password: string) {
    // return await firstValueFrom(
    //   this.httpService
    //     .post<boolean>('auth', {
    //       baseURL: this.configFactory.network.AUTH_BASE_URL,
    //       params: { username, password },
    //     })
    //     .pipe(
    //       catchError((error: AxiosError) => {
    //         throw error;
    //       }),
    //     ),
    // );

    return await Promise.resolve(
      Boolean(MOCK_AUTH.find((auth) => auth.username === username && auth.password === password)),
    );
  }
}
