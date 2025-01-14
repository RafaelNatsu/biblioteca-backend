import { PartialType } from '@nestjs/swagger';
import { CreateEditoraDto } from './create-editora.dto';

export class UpdateEditoraDto extends PartialType(CreateEditoraDto) {}
