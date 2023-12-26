import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    create(createScheduleDto: CreateScheduleDto): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        dateTimeStart: Date;
        dateTimeEnd: Date;
        groupId: number;
    }>;
    update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<{
        id: number;
        dateTimeStart: Date;
        dateTimeEnd: Date;
        groupId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        dateTimeStart: Date;
        dateTimeEnd: Date;
        groupId: number;
    }>;
}
