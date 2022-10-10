import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, unique: true })
  name: string;

  @Prop(Number)
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
