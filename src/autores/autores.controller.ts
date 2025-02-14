import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Controller()
export class AutoresController {
    constructor(private readonly autoresService: AutoresService) {}

    @Post()
    create(@Body() createAutoreDto: CreateAutorDto) {
        return this.autoresService.create(createAutoreDto);
    }

    @Get()
    findAll() {
        return this.autoresService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.autoresService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAutoreDto: UpdateAutorDto) {
        return this.autoresService.update(+id, updateAutoreDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.autoresService.remove(+id);
    }
}
