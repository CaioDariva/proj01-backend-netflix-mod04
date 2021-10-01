import { CreateFilmeDto } from './dto/create-filme.dto';
export declare type Filme = {
    nome: string;
    data_lancamento: string;
    tempo_duracao: number;
    genero: [];
    participantes: [];
    imagem?: string;
};
export declare class FilmesService {
    getAll(): Filme[];
    createFilme(filme: CreateFilmeDto): number;
}
