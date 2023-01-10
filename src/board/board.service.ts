import {Inject, Injectable} from '@nestjs/common';
import {Transactional} from "typeorm-transactional";
import {BoardDto} from "../dto/board.dto";
import {Repository} from "typeorm";
import {Board} from "../entity/board.entity";

@Injectable()
export class BoardService {
  constructor(
    @Inject('BoardRepository')
    private readonly boardRepository: Repository<Board>
  ) {
  }

  async test() {
    const boardDto = new BoardDto()
    const board = boardDto.toBoardDto()
    try {
      await this.insertBoard(board)
      throw new Error('Error!!')
    } catch (err) {
      console.log(err.message)
    }
  }

  @Transactional()
  async insertBoard(board: Board) {
    await this.boardRepository.insert(board)
  }
}
