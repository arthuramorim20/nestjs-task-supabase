import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { SupabaseServiceService } from './supabase-service/supabase-service.service';
import { TaskModule } from './task/task.module';
import { SupabaseService } from './supabase/supabase.service';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
