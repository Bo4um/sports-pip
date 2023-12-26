import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GroupService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateGroupDto): Promise<{
        id: number;
        title: string;
        sportId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        sportId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        sportId: number;
    }>;
    update(id: number, dto: UpdateGroupDto): Promise<{
        id: number;
        title: string;
        sportId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        sportId: number;
    }>;
}
