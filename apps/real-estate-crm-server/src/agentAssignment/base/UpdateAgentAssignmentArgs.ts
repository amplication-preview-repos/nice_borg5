/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgentAssignmentWhereUniqueInput } from "./AgentAssignmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AgentAssignmentUpdateInput } from "./AgentAssignmentUpdateInput";

@ArgsType()
class UpdateAgentAssignmentArgs {
  @ApiProperty({
    required: true,
    type: () => AgentAssignmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgentAssignmentWhereUniqueInput)
  @Field(() => AgentAssignmentWhereUniqueInput, { nullable: false })
  where!: AgentAssignmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AgentAssignmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => AgentAssignmentUpdateInput)
  @Field(() => AgentAssignmentUpdateInput, { nullable: false })
  data!: AgentAssignmentUpdateInput;
}

export { UpdateAgentAssignmentArgs as UpdateAgentAssignmentArgs };
