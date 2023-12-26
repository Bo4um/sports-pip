import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ScheduleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateScheduleDto): Promise<{
        id: number;
        dateTimeStart: Date;
        dateTimeEnd: Date;
        groupId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        dateTimeStart: Date;
        dateTimeEnd: Date;
        groupId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        dateTimeStart: Date;
        dateTimeEnd: Date;
        groupId: number;
    }>;
    update(id: number, dto: UpdateScheduleDto): Promise<{
        id: number;
        dateTimeStart: Date;
        dateTimeEnd: Date;
        groupId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        dateTimeStart: Date;
        dateTimeEnd: Date;
        groupId: number;
    }>;
}
