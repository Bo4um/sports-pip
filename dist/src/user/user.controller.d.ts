import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
    findAll(): Promise<{
        id: number;
        username: string;
        hash: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        username: string;
        hash: string;
    }>;
}
