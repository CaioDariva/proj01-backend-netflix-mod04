import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Genero, Prisma } from '.prisma/client';

@Injectable()
export class GenerosService {
  constructor(private prisma: PrismaService) {}
  async createGenero(data: Prisma.GeneroCreateInput): Promise<Genero> {
    return this.prisma.genero.create({
      data,
    });
  }

  async getAll(): Promise<Genero[]> {
    return this.prisma.genero.findMany();
  }

  async getOneGenero(generoId: number): Promise<Genero> {
    return this.prisma.genero.findUnique({
      where: {
        id: generoId,
      },
    });
  }

  async updateGenero(
    generoId: number,
    data: Prisma.GeneroCreateInput,
  ): Promise<Genero> {
    return this.prisma.genero.update({
      data,
      where: {
        id: generoId,
      },
    });
  }

  async deleteGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero> {
    return this.prisma.genero.delete({ where });
  }
}
