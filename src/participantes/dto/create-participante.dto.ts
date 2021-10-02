import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty()
  data_nascimento: string;
  @IsNotEmpty()
  imagem: string;
  @IsNotEmpty()
  participacao_como: string;
  @IsOptional()
  filmeId: number;
}
