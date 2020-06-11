import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class Snippet extends Document {
  
  @Field(type => String)
  id: string;

  @Prop()
  @Field({ nullable: true })
  type: string;

  @Prop()
  @Field({ nullable: true })
  keywords: string;

  @Prop()
  @Field({ nullable: true })
  name: string;
  
  @Prop()
  @Field({ nullable: true })
  language: string;

  @Field({ nullable: true })
  preview?: string;

  @Prop()
  @Field({ nullable: true })
  content: string;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);