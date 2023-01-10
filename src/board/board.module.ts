import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import {DatabaseModule} from "../database/database.module";
import {boardProviders} from "./board.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService, ...boardProviders]
})
export class BoardModule {}
