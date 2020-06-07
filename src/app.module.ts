import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { AppService } from './app.service';
import { SnippetsModule } from './snippets/snippets.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      path: '/',
      playground: true,
      introspection: true,
    }),

    SnippetsModule
  ],
  providers: [AppService],
})
export class AppModule {}
