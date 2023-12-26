import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
    findAll(): Promise<{
        id: number;
        username: string;
        hash: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
    findByUsername(username: string): Promise<{
        roles: {
            id: number;
            name: string;
        }[];
    } & {
        id: number;
        username: string;
        hash: string;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
}
