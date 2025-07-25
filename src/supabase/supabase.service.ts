import { Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

@Injectable()
export class SupabaseService {
  private client: SupabaseClient;
  constructor() {
    this.client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_KEY as string,
    );
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
