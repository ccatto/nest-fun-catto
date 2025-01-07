import { Module } from '@nestjs/common';
import { TeamsResolver } from './teams.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [TeamsResolver, PrismaService],
})
export class TeamsModule {}