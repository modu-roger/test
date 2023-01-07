import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'Datasource',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'roger',
                database: 'project',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
                logging: true
            });

            return dataSource.initialize();
        },
    },
];