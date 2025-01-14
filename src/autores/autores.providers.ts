import { DataSource } from 'typeorm';
import { Autor } from './entities/autor.entity';

export const autoresProviders = [
    {
        provide: 'AUTOR_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Autor),
        inject: ['DATA_SOURCE'],
    },
];
