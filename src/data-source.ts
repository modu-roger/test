import "reflect-metadata"
import {User} from "./entity/user.entity";
import {Board} from "./entity/board.entity";

// export const AppDataSource = new TypeOrmModule({
//
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "roger",
//     database: "project",
//     synchronize: true,
//     logging: true,
//     entities: [User, Board],
//     subscribers: [],
//     migrations: []
// })
//
// AppDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//     })
//     .catch((error) => console.log(error))
