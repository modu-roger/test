import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    BoardModule
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
