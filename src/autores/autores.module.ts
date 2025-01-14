import { Logger, Module } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { AutoresController } from './autores.controller';
import { autoresProviders } from './autores.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AutoresController],
    providers: [
        ...autoresProviders,
        AutoresService
    ],
})
export class AutoresModule {}
