import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class TaskService {
  // private client: SupabaseService;
  constructor(private readonly client: SupabaseService) {}

  async createTask(task: CreateTaskDto) {
    const { error } = await this.client.getClient().from('task').insert({
      task: task.task,
      completed: task.completed,
    });
    if (error) throw error;

    return {
      message: 'task created!',
    };
  }

  async findAll() {
    const { data, error } = await this.client
      .getClient()
      .from('task')
      .select('*'); //sintaxe do supabase para queries
    if (error) throw error;
    return JSON.stringify(data);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const { error } = await this.client
      .getClient()
      .from('task')
      .update({
        task: updateTaskDto.task,
        completed: updateTaskDto.completed,
      })
      .eq('id', id);

    if (error) throw error;
    return {
      message: 'task updated!',
    };
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
