import { Module } from '@nestjs/common';
import { EditorasService } from './editoras.service';
import { EditorasController } from './editoras.controller';

@Module({
    controllers: [EditorasController],
    providers: [EditorasService],
})
export class EditorasModule {}
