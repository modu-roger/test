import { Module } from '@nestjs/common';
import {dataSource} from "./database.providers";

const databaseProvider = {
  provide: 'default',
  useFactory: async () => {
    return dataSource.initialize();
  },
}
@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DatabaseModule {}