import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTeamInput {
  @Field()
  name: string;

  @Field()
  color: string;
}

@InputType()
export class UpdateTeamInput {
  @Field()
  name: string;

  @Field()
  color: string;
}