/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
import { Model } from 'mongoose';
import { EmployeesService } from 'src/employees/employees.service';
import { ProyectsService } from 'src/proyects/proyects.service';

@Injectable()
export class TaskService {

  constructor(@InjectModel('Task') private taskModel: Model<Task>,
  private readonly employeesService: EmployeesService, 
  private readonly proyectsService: ProyectsService,
){}

  create(createTaskDto: CreateTaskDto) {
    const employee = this.employeesService.findOne(createTaskDto.employeeId);
    const proyect = this.proyectsService.findOne(createTaskDto.proyectId);

    if (!employee) {
      throw new NotFoundException(`Empleado con ID ${createTaskDto.employeeId} no encontrado`);
    }

    if (!proyect) {
      throw new NotFoundException(`Proyecto con ID ${createTaskDto.proyectId} no encontrado`);
    }

    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
