import { Field, ObjectType, InputType } from '@nestjs/graphql';

@InputType()
export class SnippetInput {
  @Field()
  name: string;

  @Field()
  content: string;
}