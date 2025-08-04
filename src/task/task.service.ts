import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/task/task';
import { UpdateTaskDto } from '../dto/task/updateTask/updateTask';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class TaskService {
  constructor(private readonly client: SupabaseService) {}

  async createTask(task: CreateTaskDto) {
    const { error } = await this.client.getClient.from('task').insert({
      task: task.task,
      completed: task.completed,
    });
    if (error) throw error;

    return {
      message: 'task created!',
    };
  }

  async findAll(limit?: number) {
    const { error, data } = limit
      ? await this.client.getClient.from('task').select('*').limit(limit)
      : await this.client.getClient.from('task').select('*');
    if (error) throw error;
    console.log(data);
    return JSON.stringify(data);
  }

  async findOne(id?: number, search?: string) {
    const { error, data } = search
      ? await this.client.getClient
          .from('task')
          .select('*')
          .textSearch('task', search)
      : await this.client.getClient.from('task').select('*').eq('id', id);

    if (error) throw error;

    return JSON.stringify(data);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const { error } = await this.client.getClient
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

  async remove(id: number) {
    const { error } = await this.client.getClient
      .from('task')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return {
      message: 'deleted',
    };
  }
}
