import {
  Body,
  Controller,
  Get,
  Post,
  ValidationPipe,
  UsePipes,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Filme[]> {
    return this.filmesService.getAll();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.createFilme(createFilme);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.filmesService.deleteOneFilme({ id: Number(id) });
  }
}
