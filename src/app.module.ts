import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { SportModule } from './sport/sport.module';
import { GroupModule } from './group/group.module';
import { TrainerModule } from './trainer/trainer.module';
import { ScheduleModule } from './schedule/schedule.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    StudentModule,
    SportModule,
    GroupModule,
    TrainerModule,
    ScheduleModule,
    RoleModule,
  ],
})
export class AppModule {}
