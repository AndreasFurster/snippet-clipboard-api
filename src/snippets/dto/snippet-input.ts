import { Field, ObjectType, InputType } from '@nestjs/graphql';

@InputType()
export class SnippetInput {
  @Field()
  name: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  keywords: string;

  @Field({ nullable: true })
  language: string;

  @Field()
  content: string;
}