import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }
  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }
  async getOneFilme(filmeId: number): Promise<Filme> {
    return this.prisma.filme.findUnique({
      where: {
        id: filmeId,
      },
    });
  }
  async deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }
  async updateOneFilme(
    filmeId: number,
    data: Prisma.FilmeCreateInput,
  ): Promise<Filme> {
    return this.prisma.filme.update({
      data,
      where: {
        id: filmeId,
      },
    });
  }
}
