import { Controller, Get, Post, Body } from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import { Snippet } from './schemas/snippet.schema';
import { CreateSnippetDto } from './dto/create-snippet.dto';

@Controller('/snippets')
export class SnippetController {
  constructor(private readonly snippetsService: SnippetsService) {}

  @Get()
  findAll(): Promise<Snippet[]> {
    return this.snippetsService.findAll();
  }

  @Post()
  async create(@Body() createSnippetDto: CreateSnippetDto) {
    return this.snippetsService.create(createSnippetDto)
  }
}
