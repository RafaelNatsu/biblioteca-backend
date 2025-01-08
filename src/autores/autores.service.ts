import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutoresService {
    create(createAutoreDto: CreateAutorDto) {
        return 'This action adds a new autore';
    }

    findAll() {
        return `This action returns all autores`;
    }

    findOne(id: number) {
        return `This action returns a #${id} autore`;
    }

    update(id: number, updateAutoreDto: UpdateAutorDto) {
        return `This action updates a #${id} autore`;
    }

    remove(id: number) {
        return `This action removes a #${id} autore`;
    }
}
