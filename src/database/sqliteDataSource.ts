import { DataSource, DataSourceOptions } from 'typeorm';

export const sqliteDataSourceOptions: DataSourceOptions = {
    type: 'sqlite',
    database: './db/database.sqlite',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '../../../migrations/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    synchronize: false,
    logging: true,
};

export const sqliteDataSource = new DataSource(sqliteDataSourceOptions);
