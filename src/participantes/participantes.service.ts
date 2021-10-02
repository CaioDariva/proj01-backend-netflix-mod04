import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Participante, Prisma } from '.prisma/client';

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}
  async createParticipante(
    data: Prisma.ParticipanteCreateInput,
  ): Promise<Participante> {
    return this.prisma.participante.create({
      data,
    });
  }
  async getAll(): Promise<Participante[]> {
    return this.prisma.participante.findMany();
  }
  async getOneParticipante(participanteId: number): Promise<Participante> {
    return this.prisma.participante.findUnique({
      where: {
        id: participanteId,
      },
    });
  }
  async updateParticipante(
    participanteId: number,
    data: Prisma.ParticipanteCreateInput,
  ): Promise<Participante> {
    return this.prisma.participante.update({
      data,
      where: {
        id: participanteId,
      },
    });
  }
  async deletePaticipante(
    where: Prisma.ParticipanteWhereUniqueInput,
  ): Promise<Participante> {
    return this.prisma.participante.delete({ where });
  }
}
