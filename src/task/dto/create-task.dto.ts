/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

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
