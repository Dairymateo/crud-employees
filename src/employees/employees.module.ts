/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './Schema/Employee.Schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
  exports: [EmployeesService],
})
export class EmployeesModule {}
