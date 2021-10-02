import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmesService;
    constructor(filmesService: FilmesService);
    findMany(): Promise<Filme[]>;
    create(createFilme: CreateFilmeDto): Promise<Filme>;
    findUnique(id: number): Promise<Filme>;
    delete(id: string): Promise<Filme>;
    update(updateFilme: CreateFilmeDto, id: number): Promise<Filme>;
}
