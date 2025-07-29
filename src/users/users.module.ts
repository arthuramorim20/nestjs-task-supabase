import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { SupabaseService } from 'src/supabase/supabase.service';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [SupabaseService, UsersService],
})
export class UsersModule {}
