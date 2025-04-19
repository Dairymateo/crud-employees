/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import {IsEmail, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    phone: string;

    @IsOptional()
    @IsNumber()
    salary: number;

    @IsOptional()
    @IsString()
    department: string;
}
