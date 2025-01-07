import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Team } from './team.model';
import { PrismaService } from '../prisma.service';
import { CreateTeamInput, UpdateTeamInput } from './team.input';

@Resolver(() => Team)
export class TeamsResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Team])
  async teams(): Promise<Team[]> {
    return this.prisma.team.findMany();
  }

  @Mutation(() => Team)
  async createTeam(@Args('input') input: CreateTeamInput): Promise<Team> {
    return this.prisma.team.create({
      data: input,
    });
  }

  @Mutation(() => Team)
  async updateTeam(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateTeamInput,
  ): Promise<Team> {
    return this.prisma.team.update({
      where: { id },
      data: input,
    });
  }
}
