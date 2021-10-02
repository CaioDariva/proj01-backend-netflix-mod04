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
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { Participante } from '.prisma/client';

@Controller('participantes')
export class ParticipantesController {
  constructor(private participantesService: ParticipantesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createParticipanteDto: CreateParticipanteDto) {
    return this.participantesService.createParticipante(createParticipanteDto);
  }

  @Get('/list')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<Participante[]> {
    return this.participantesService.getAll();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id') id: string) {
    return this.participantesService.getOneParticipante(+id);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() updateParticipanteDto: CreateParticipanteDto,
  ) {
    return this.participantesService.updateParticipante(
      +id,
      updateParticipanteDto,
    );
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.participantesService.deletePaticipante({ id: Number(id) });
  }
}
