import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ParticipantesController],
  providers: [ParticipantesService],
})
export class ParticipantesModule {}
