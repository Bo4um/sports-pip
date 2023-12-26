import { IsInt, IsString } from 'class-validator';

export class CreateTrainerDto {
  @IsInt()
  userId: number;
  @IsString()
  fullName: string;
  @IsString()
  sportAchievements: string;
}
