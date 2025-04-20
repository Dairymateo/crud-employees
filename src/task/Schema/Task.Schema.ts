/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()

export class Task {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    date: Date;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    priority: number;

    @Prop({ required: true })
    employeeId: string;

    @Prop({ required: true })
    proyectId: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);