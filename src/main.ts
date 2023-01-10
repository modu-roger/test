import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {initializeTransactionalContext} from "typeorm-transactional";
import {addTransactionalDataSource} from "typeorm-transactional/dist/common";
import {DataSource} from "typeorm";
import {dataSource} from "./database/database.providers";

async function bootstrap() {
  // initializeTransactionalContext()
  // addTransactionalDataSource(dataSource)

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
