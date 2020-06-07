import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Snippet } from './schemas/snippet.schema';
import { CreateSnippetDto } from './dto/create-snippet.dto';

@Injectable()
export class SnippetsService {
  constructor(@InjectModel(Snippet.name) private snippetModel: Model<Snippet>) {}

  async create(createSnippetDto: CreateSnippetDto): Promise<Snippet> {
    const createdsnippet = new this.snippetModel(createSnippetDto);
    return createdsnippet.save();
  }

  async findAll(): Promise<Snippet[]> {
    return this.snippetModel.find().exec();
  }
}
