import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { GenerosService } from './generos.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { Genero } from '.prisma/client';

@Controller('generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generosService.createGenero(createGeneroDto);
  }

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Genero[]> {
    return this.generosService.getAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id') id: string) {
    return this.generosService.getOneGenero(+id);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() updateGeneroDto: CreateGeneroDto,
  ) {
    return this.generosService.updateGenero(+id, updateGeneroDto);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.generosService.deleteGenero({ id: Number(id) });
  }
}
