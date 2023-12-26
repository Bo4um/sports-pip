import { IsInt, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  title: string;
  @IsInt()
  sportId: number;
}
