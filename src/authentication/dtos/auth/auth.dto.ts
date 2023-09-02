import { Injectable } from '@nestjs/common';
import { IsString } from 'class-validator';

@Injectable()
export class LoginDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
