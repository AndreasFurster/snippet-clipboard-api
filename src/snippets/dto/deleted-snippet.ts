import { ObjectType, Field } from '@nestjs/graphql';


@ObjectType()
export class SnippetDeletedResult {
  @Field(type => String)
  id: string;
  
  constructor(id){
    this.id = id
  }
}