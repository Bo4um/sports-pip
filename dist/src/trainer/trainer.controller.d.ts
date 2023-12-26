import { TrainerService } from './trainer.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
export declare class TrainerController {
    private readonly trainerService;
    constructor(trainerService: TrainerService);
    create(createTrainerDto: CreateTrainerDto): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        fullName: string;
        sportAchievements: string;
        userId: number;
    }>;
    update(id: string, updateTrainerDto: UpdateTrainerDto): Promise<{
        id: number;
        fullName: string;
        sportAchievements: string;
        userId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        fullName: string;
        sportAchievements: string;
        userId: number;
    }>;
}
