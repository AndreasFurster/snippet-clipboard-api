import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Snippet } from './schemas/snippet.schema';
import { SnippetInput } from './dto/snippet-input';

@Injectable()
export class SnippetsService {
  constructor(@InjectModel(Snippet.name) private snippetModel: Model<Snippet>) {}

  create(): Promise<Snippet> {
    const createdSnippet = new this.snippetModel();
    return createdSnippet.save();
  }
  
  findAll(): Promise<Snippet[]> {
    return this.snippetModel.find().exec();
  }
  
  findOneById(id) : Promise<Snippet> {
    return this.snippetModel.findById(id).exec()
  }
  
  async update(id: string, snippet: SnippetInput): Promise<Snippet> {
    await this.snippetModel.findOneAndUpdate({ _id: id }, snippet).exec();
    return this.snippetModel.findById(id).exec();
  }

  delete(id: string): Promise<any> {
    return this.snippetModel.deleteMany({ _id: id }).exec();
  }
  
}
