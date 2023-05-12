import { Inject, Injectable } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional';
import { BoardDto } from '../dto/board.dto';
import { Repository } from 'typeorm';
import { Board } from '../entity/board.entity';
import { BoardRepository } from './board.repo';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async test() {
    const boardDto = new BoardDto();
    const board = boardDto.toBoardDto();
    try {
      await this.insertBoard(board);
    } catch (err) {
      console.log(err.message);
    }
  }

  @Transactional()
  async insertBoard(board: Board) {
    await this.boardRepository.insert(board);
    throw new Error('Error!!');
  }
}
