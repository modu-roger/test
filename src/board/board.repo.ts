import { Repository } from 'typeorm';
import { Board } from '../entity/board.entity';
import { CustomRepository } from '../common/custom-repository';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}
