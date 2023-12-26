import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class StudentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateStudentDto): Promise<{
        id: number;
        fullName: string;
        faculty: string;
        facultyGroup: number;
        birthdayDate: Date;
        userId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        fullName: string;
        faculty: string;
        facultyGroup: number;
        birthdayDate: Date;
        userId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        fullName: string;
        faculty: string;
        facultyGroup: number;
        birthdayDate: Date;
        userId: number;
    }>;
    update(id: number, dto: UpdateStudentDto): Promise<{
        id: number;
        fullName: string;
        faculty: string;
        facultyGroup: number;
        birthdayDate: Date;
        userId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        fullName: string;
        faculty: string;
        facultyGroup: number;
        birthdayDate: Date;
        userId: number;
    }>;
}
