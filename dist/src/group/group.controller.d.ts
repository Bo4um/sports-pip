import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    create(createGroupDto: CreateGroupDto): Promise<{
        id: number;
        title: string;
        sportId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        sportId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        sportId: number;
    }>;
    update(id: string, updateGroupDto: UpdateGroupDto): Promise<{
        id: number;
        title: string;
        sportId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        sportId: number;
    }>;
}
