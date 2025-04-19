/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateProyectDto {
    
    
    @IsNotEmpty()
    @IsString() 
    name: string;

    @IsNotEmpty()
    @IsString() 
    description: string;

    @IsNotEmpty()
    @IsString() 
    status: string;

    @IsNotEmpty()
    @IsNumber()
    budget: number;
    
}
