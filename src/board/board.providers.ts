import {DataSource} from "typeorm";
import {Board} from "../entity/board.entity";

export const boardProviders = [{
    provide: 'BoardRepository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Board),
    inject: ['default']
}]