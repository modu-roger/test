import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import {DataSource} from "typeorm";

@Module({
  imports: [BoardModule, DataSource],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
