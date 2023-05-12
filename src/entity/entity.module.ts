import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { EntityModuleAsyncOptions } from './entity.interface';

@Module({})
export class EntityModule {
  static forRootAsync(options: EntityModuleAsyncOptions): DynamicModule {
    return {
      imports: [
        TypeOrmModule.forRootAsync({
          name: options.connectionName,
          inject: options.inject,
          useFactory: async (...args: any[]) => {
            const typeOrmModuleOptions: TypeOrmModuleOptions =
              await options.useFactory(...args);

            return {
              bigNumberStrings: false,
              ...typeOrmModuleOptions,
              entities: [join(__dirname, './*.entity{.ts,.js}')],
            };
          },
          dataSourceFactory: options.dataSourceFactory,
          extraProviders: options.extraProviders,
        }),
      ],
      module: EntityModule,
    };
  }
}
