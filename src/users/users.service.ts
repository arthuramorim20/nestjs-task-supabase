import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CreateUserDto } from '../dto/users/user';
// import { Users } from '../interfaces/user';

@Injectable()
export class UsersService {
  constructor(private readonly client: SupabaseService) {}

  async createNewUser(createNewUser: CreateUserDto) {
    const { error } = await this.client.getClient.auth.signUp({
      email: createNewUser.email,
      password: createNewUser.password,
    });

    if (error) throw error;

    return {
      message: 'user created!',
    };
  }
}
