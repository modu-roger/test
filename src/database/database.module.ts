import { Module, Type } from '@nestjs/common';
import { dataSource } from './database.providers';
import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';

export interface DatabaseProvider {
  provide: string | Function | Type<DataSource>;
  useFactory: () => Promise<DataSource>;
}

export const databaseProvider = {
  provide: DataSource,
  useFactory: async () => {
    return dataSource.initialize();
  },
};
@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DatabaseModule {}
