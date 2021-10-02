import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GenerosController],
  providers: [GenerosService],
})
export class GenerosModule {}
