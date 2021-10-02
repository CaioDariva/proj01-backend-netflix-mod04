import { PrismaService } from 'src/prisma/prisma.service';
import { Genero, Prisma } from '.prisma/client';
export declare class GenerosService {
    private prisma;
    constructor(prisma: PrismaService);
    createGenero(data: Prisma.GeneroCreateInput): Promise<Genero>;
    getAll(): Promise<Genero[]>;
    getOneGenero(generoId: number): Promise<Genero>;
    updateGenero(generoId: number, data: Prisma.GeneroCreateInput): Promise<Genero>;
    deleteGenero(where: Prisma.GeneroWhereUniqueInput): Promise<Genero>;
}
