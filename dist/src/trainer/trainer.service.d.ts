import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TrainerService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateTrainerDto): Promise<{
        id: number;
        fullName: string;
        sportAchievements: string;
        userId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        fullName: string;
        sportAchievements: string;
        userId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        fullName: string;
        sportAchievements: string;
        userId: number;
    }>;
    update(id: number, dto: UpdateTrainerDto): Promise<{
        id: number;
        fullName: string;
        sportAchievements: string;
        userId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        fullName: string;
        sportAchievements: string;
        userId: number;
    }>;
}
