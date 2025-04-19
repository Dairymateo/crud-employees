/* eslint-disable prettier/prettier */
import { Prop, Schema } from "@nestjs/mongoose";


@Schema()

export class Employee {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    salary: number;

    @Prop({ required: true })
    department: string;
}