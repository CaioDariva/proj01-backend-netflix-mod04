import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';

export type Filme = {
  nome: string;
  data_lancamento: string;
  tempo_duracao: number;
  genero: [];
  participantes: [];
  imagem?: string;
};

//const fixo antes de colocar o banco
const filmes: Filme[] = [
  {
    nome: 'Filme 1',
    data_lancamento: '12/12/2012',
    tempo_duracao: 120,
    genero: [],
    participantes: [],
    imagem: 'google.com',
  },
];

@Injectable()
export class FilmesService {
  getAll() {
    return filmes;
  }
}
