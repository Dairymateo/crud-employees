/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectDto } from './create-proyect.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProyectDto extends PartialType(CreateProyectDto) {


    @IsOptional()
    @IsString() 
    name: string;

    @IsOptional()
    @IsString() 
    description: string;

    @IsOptional()
    @IsString() 
    status: string;

    @IsOptional()
    @IsNumber()
    budget: number
}
