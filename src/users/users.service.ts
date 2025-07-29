import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { Users } from './dto/usersDto';

@Injectable()
export class UsersService {
  constructor(private readonly client: SupabaseService) {}

  async createNewUser(createNewUser: Users) {
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
