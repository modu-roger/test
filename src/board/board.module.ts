import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { BoardRepository } from './board.repo';
import { CustomTypeOrmModule } from '../common/custom-repository';

@Module({
  imports: [CustomTypeOrmModule.forCustomRepository([BoardRepository])],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}

// CustomTypeOrmModule.forCustomRepository([BoardRepository])
