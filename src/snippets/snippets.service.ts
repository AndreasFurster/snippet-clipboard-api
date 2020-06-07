import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Snippet } from './schemas/snippet.schema';
import { SnippetInput } from './dto/snippet-input';

@Injectable()
export class SnippetsService {
  constructor(@InjectModel(Snippet.name) private snippetModel: Model<Snippet>) {}

  create(snippet: SnippetInput): Promise<Snippet> {
    const createdSnippet = new this.snippetModel(snippet);
    return createdSnippet.save();
  }
  
  findAll(): Promise<Snippet[]> {
    return this.snippetModel.find().exec();
  }
  
  findOneById(id) : Promise<Snippet> {
    return this.snippetModel.findById(id).exec()
  }
  
  update(id: string, snippet: SnippetInput): Promise<Snippet> {
    return this.snippetModel.update((s: Snippet) => s.id == id, snippet).exec();
  }

  delete(id: string): Promise<any> {
    return this.snippetModel.deleteMany({ id }).exec();
  }
  
}
