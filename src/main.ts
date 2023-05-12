import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { addTransactionalDataSource } from 'typeorm-transactional/dist/common';
import { DataSource } from 'typeorm';
import { dataSource } from './database/database.providers';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './exception/http-exception.filter';

async function bootstrap() {
  // initializeTransactionalContext()
  // addTransactionalDataSource(dataSource)

  initializeTransactionalContext();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
