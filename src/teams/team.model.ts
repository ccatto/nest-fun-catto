import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Team {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
