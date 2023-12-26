import { SportService } from './sport.service';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
export declare class SportController {
    private readonly sportService;
    constructor(sportService: SportService);
    create(createSportDto: CreateSportDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
    }>;
    update(id: string, updateSportDto: UpdateSportDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
