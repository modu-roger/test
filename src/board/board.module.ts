import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import {userProviders} from "../provider/user.providers";
import {DatabaseModule} from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule {}
