import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SnippetsService } from './snippets.service';
import { Snippet, SnippetSchema } from './schemas/snippet.schema';
import { SnippetsResolver } from './snippets.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Snippet.name, schema: SnippetSchema }]),
    // SnippetsService
  ],
  controllers: [
    // SnippetController
  ],
  providers: [
    SnippetsService,
    SnippetsResolver
  ],
})
export class SnippetsModule {}