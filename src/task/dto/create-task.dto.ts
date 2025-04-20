/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDate()
    @IsNotEmpty()
    date: Date;

    @IsString()
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsNotEmpty()
    employeeId: string; 

    @IsString()
    @IsNotEmpty()
    proyectId: string;


  
}
