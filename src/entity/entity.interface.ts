import { ModuleMetadata, Provider } from '@nestjs/common';
import {
  TypeOrmDataSourceFactory,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export interface EntityModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  connectionName: string;
  useFactory: (...args: any[]) => Promise<TypeOrmModuleOptions>;
  inject: any[];
  dataSourceFactory?: TypeOrmDataSourceFactory;
  extraProviders?: Provider[];
}

export interface ConnectionInfo {
  type: string;
  host: string;
  hostReader?: string;
  username: string;
  password: string;
  connectionLimit?: number;
  port: number;
  database: string;
}
