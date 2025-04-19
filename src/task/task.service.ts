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
    return this.taskModel.find().populate('employeeId').populate('proyectId');
  }

  findOne(id: string) {
    return this.taskModel.findById(id).populate('employeeId').populate('proyectId');
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const updatedTask = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true })
      .populate('employeeId')
      .populate('proyectId')
      .exec();

    if (!updatedTask) {
      throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    }

    return updatedTask;
  }

  remove(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
