import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { Participante } from '.prisma/client';
export declare class ParticipantesController {
    private participantesService;
    constructor(participantesService: ParticipantesService);
    create(createParticipanteDto: CreateParticipanteDto): Promise<Participante>;
    findMany(): Promise<Participante[]>;
    findOne(id: string): Promise<Participante>;
    update(id: string, updateParticipanteDto: CreateParticipanteDto): Promise<Participante>;
    delete(id: string): Promise<Participante>;
}
