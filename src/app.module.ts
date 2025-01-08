import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { ObrasModule } from './obras/obras.module';

@Module({
    imports: [
        RouterModule.register([
            {
                path: 'obras',
                module: ObrasModule,
            },
        ]),
        ObrasModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
