import { IsEmail, IsString } from 'class-validator';

export class Users {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
