import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;
  data_lancamento: string;
  tempo_duracao: number;
  genero: [];
  participantes: [];

  @IsOptional()
  imagem: string;
}
