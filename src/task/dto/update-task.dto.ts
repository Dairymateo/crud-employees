/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsDate()
    @IsOptional()
    date: Date;

    @IsString()
    @IsOptional()
    status: string;

    @IsString()
    @IsOptional()
    employeeId: string; 

    @IsString()
    @IsOptional()
    projectId: string;
}
