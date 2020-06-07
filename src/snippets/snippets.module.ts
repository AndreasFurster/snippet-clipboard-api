import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SnippetController } from './snippets.controller';
import { SnippetsService } from './snippets.service';
import { Snippet, SnippetSchema } from './schemas/snippet.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Snippet.name, schema: SnippetSchema }])],
  controllers: [SnippetController],
  providers: [SnippetsService],
})
export class SnippetsModule {}