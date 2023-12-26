import { IsDateString, IsInt } from 'class-validator';

export class CreateScheduleDto {
  @IsInt()
  groupId: number;
  @IsDateString()
  dateTimeStart: Date;
  @IsDateString()
  dateTimeEnd: Date;
}
