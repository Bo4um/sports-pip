import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsInt()
  userId: number;
  @IsString()
  fullName: string;
  @IsString()
  faculty: string;
  @IsInt()
  facultyGroup: number;
  @IsDateString()
  birthdayDate: Date;
}
