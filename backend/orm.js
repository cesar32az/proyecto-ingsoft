
require('./src/config/dotenv.ts')
module.exports = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['src/entities/**/*{.ts,.js}'],
  migrationsRun: true,
  migrationsTableName: 'migrations_typeorm',
  migrations: ['src/db/migrations/*{.ts,.js}'],
  synchronize: true,
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/db/migrations',
  },
};
