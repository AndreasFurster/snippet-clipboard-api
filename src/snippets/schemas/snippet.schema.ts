import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Snippet extends Document {
  @Prop()
  name: string;

  @Prop()
  content: string;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);