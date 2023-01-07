import {DataSource} from "typeorm";
import {User} from "../entity/user.entity";

export const userProviders = [{
    provide: 'UserRepository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: 'Datasource'
}]