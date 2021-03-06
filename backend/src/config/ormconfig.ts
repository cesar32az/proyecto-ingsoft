import { ConnectionOptions } from 'typeorm';
import path from 'path';
import './dotenv';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  //migrationsRun: true,
  migrationsTableName: 'migrations_typeorm',
  logging: true,
  entities: [path.join(__dirname, '../entity/**/*.{ts,js}')],
  migrations: [path.join(__dirname, '../db/migrations/**/*.ts')],
  cli: {
    migrationsDir: 'src/db/migrations',
    entitiesDir: 'src/entity',
  },
};
export = config;
