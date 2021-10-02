import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from '.prisma/client';
export declare class GenerosController {
    private readonly generosService;
    constructor(generosService: GenerosService);
    create(createGeneroDto: CreateGeneroDto): Promise<Genero>;
    findMany(): Promise<Genero[]>;
    findOne(id: string): Promise<Genero>;
    update(id: string, updateGeneroDto: CreateGeneroDto): Promise<Genero>;
    delete(id: string): Promise<Genero>;
}
