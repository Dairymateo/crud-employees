/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Proyect } from './Schema/Proyect.Schema';

@Injectable()
export class ProyectsService {

  constructor(@InjectModel('Proyect') private proyectModel: Model<Proyect>) {}


  create(createProyectDto: CreateProyectDto) {
    return this.proyectModel.create(createProyectDto);
  }

  findAll() {
    return this.proyectModel.find();
  }

  findOne(id: string) {
    return this.proyectModel.findById(id);
  }

  update(id: string, updateProyectDto: UpdateProyectDto) {
    return this.proyectModel.findByIdAndUpdate(id, updateProyectDto);
  }

  remove(id: string) {
    return this.proyectModel.findByIdAndDelete(id);
  }
}
