import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Repository } from 'typeorm';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutoresService {
    constructor(
        @Inject('AUTOR_REPOSITORY')
        private readonly autorRepository: Repository<Autor>,
    ) {}

    async create(createAutoreDto: CreateAutorDto): Promise<Autor> {
        const autor = this.autorRepository.create(createAutoreDto);
        return this.autorRepository.save(autor);
    }

    async findAll(): Promise<Autor[]> {
        return this.autorRepository.find();
    }

    async findOne(id: number): Promise<Autor | null> {
        return this.autorRepository.findOneBy({ id });
    }

    async update(id: number, updateAutoreDto: UpdateAutorDto): Promise<Autor | null> {
        await this.autorRepository.update(id, updateAutoreDto);
        return this.autorRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.autorRepository.delete(id);
    }
}
