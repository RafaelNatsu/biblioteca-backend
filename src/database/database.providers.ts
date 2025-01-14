import { DataSource } from 'typeorm';
import { sqliteDataSourceOptions } from './sqliteDataSource';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource(sqliteDataSourceOptions);
            return dataSource.initialize();
        },
    },
];
