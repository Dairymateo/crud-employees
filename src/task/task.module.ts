/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
import { TaskSchema } from './Schema/Task.Schema';
import { EmployeesModule } from 'src/employees/employees.module';
import { ProyectsModule } from 'src/proyects/proyects.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  EmployeesModule, 
  ProyectsModule,
],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
