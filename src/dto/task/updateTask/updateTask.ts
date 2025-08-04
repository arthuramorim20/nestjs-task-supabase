import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from '../task';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
