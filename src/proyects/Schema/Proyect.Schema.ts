/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema()
export class Proyect {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    budget: number;
}

export const ProyectSchema = SchemaFactory.createForClass(Proyect);