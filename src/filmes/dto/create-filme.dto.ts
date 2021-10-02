import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  data_lancamento: string;
  @IsNotEmpty()
  tempo_duracao: number;
  //genero: number[];
  //participantes: number[];

  @IsOptional()
  imagem: string;
}
