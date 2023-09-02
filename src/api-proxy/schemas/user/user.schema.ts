import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => ID)
  userId: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  email: string;
}

@InputType()
export class UserInput {
  @IsString()
  @Field(() => ID)
  userId: string;

  @IsString()
  @Field()
  username: string;

  @IsString()
  @Field()
  password: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  email?: string;
}
