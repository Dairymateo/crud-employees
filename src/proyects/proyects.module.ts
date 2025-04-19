/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { ProyectsController } from './proyects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Proyect, ProyectSchema } from './Schema/Proyect.Schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Proyect.name, schema: ProyectSchema }])],
  controllers: [ProyectsController],
  providers: [ProyectsService],
})
export class ProyectsModule {}
