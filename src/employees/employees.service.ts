/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './Schema/Employee.Schema';

@Injectable()
export class EmployeesService {

  constructor(@InjectModel('Employee') private employeeModel: Model<Employee>) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = new this.employeeModel(createEmployeeDto);
    return newEmployee.save();
  }

  findAll() {
    return this.employeeModel.find();
  }

  findOne(id: string) {
    return this.employeeModel.findById(id);
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
  }

  remove(id: string) {
    return `This action removes a #${id} employee`;
  }
}
