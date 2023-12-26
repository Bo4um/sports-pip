import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<{
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
    findOne(id: string): Promise<{
        id: number;
        fullName: string;
        faculty: string;
        facultyGroup: number;
        birthdayDate: Date;
        userId: number;
    }>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<{
        id: number;
        fullName: string;
        faculty: string;
        facultyGroup: number;
        birthdayDate: Date;
        userId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        fullName: string;
        faculty: string;
        facultyGroup: number;
        birthdayDate: Date;
        userId: number;
    }>;
}
