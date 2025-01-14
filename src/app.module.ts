import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { ObrasModule } from './obras/obras.module';
import { AutoresModule } from './autores/autores.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { EditorasModule } from './editoras/editoras.module';

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
            {
                path: 'editoras',
                module: EditorasModule,
            },
        ]),
        ThrottlerModule.forRoot([
            {
                ttl: 60000,
                limit: 10,
            },
        ]),
        ObrasModule,
        AutoresModule,
        EditorasModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
