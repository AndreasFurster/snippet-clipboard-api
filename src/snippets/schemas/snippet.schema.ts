import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class Snippet extends Document {
  
  @Field(type => String)
  id: string;

  @Prop()
  @Field()
  name: string;
  
  @Field({ nullable: true })
  preview?: string;

  @Prop()
  @Field()
  content: string;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);