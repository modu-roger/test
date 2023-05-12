import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { EntityModule } from './entity/entity.module';
import { ConnectionInfo } from './entity/entity.interface';
import { DataSource, DataSourceOptions } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional/dist/common';

@Module({
  imports: [
    EntityModule.forRootAsync({
      inject: [],
      connectionName: 'default',
      useFactory: async () => {
        const dbConnectionInfo: ConnectionInfo = {
          type: 'mysql',
          host: '127.0.0.1',
          username: 'root',
          password: 'roger',
          port: 3306,
          database: 'project',
        };
        return {
          ...dbConnectionInfo,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          logging: true,
        } as DataSourceOptions;
      },
      dataSourceFactory: async (options) => {
        if (options == null) {
          throw new Error('Invalid options passed');
        }
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    BoardModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
