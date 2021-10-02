import { PrismaService } from 'src/prisma/prisma.service';
import { Participante, Prisma } from '.prisma/client';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    createParticipante(data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    getAll(): Promise<Participante[]>;
    getOneParticipante(participanteId: number): Promise<Participante>;
    updateParticipante(participanteId: number, data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    deletePaticipante(where: Prisma.ParticipanteWhereUniqueInput): Promise<Participante>;
}
