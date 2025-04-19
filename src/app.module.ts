/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule as mongongoseModule } from '@nestjs/mongoose';
import { ProyectsModule } from './proyects/proyects.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    mongongoseModule.forRoot('mongodb+srv://admintest:Udla@clusterudla01.grlj6.mongodb.net/CRUDTask'),
    EmployeesModule,
    ProyectsModule,
    TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
