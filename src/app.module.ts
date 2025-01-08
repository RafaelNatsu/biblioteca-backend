import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { ObrasModule } from './obras/obras.module';
import { AutoresModule } from './autores/autores.module';

@Module({
    imports: [
        RouterModule.register([
            {
                path: 'obras',
                module: ObrasModule,
            },
            {
                path: 'autores',
                module: AutoresModule,
            },
        ]),
        ObrasModule,
        AutoresModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
