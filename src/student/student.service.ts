import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateStudentDto) {
    const student = await this.prisma.student.create({
      data: dto,
    });
    return student;
  }

  findAll() {
    return this.prisma.student.findMany();
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({
      where: {
        id: id,
      },
    });
    if (!student) {
      throw new NotFoundException(`student with id = ${id} was not found`);
    }
    return student;
  }

  async update(id: number, dto: UpdateStudentDto) {
    const updatedStudent = await this.prisma.student.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return updatedStudent;
  }

  async remove(id: number) {
    const deleteStudent = await this.prisma.student
      .delete({
        where: {
          id: id,
        },
      })
      .catch(() => {
        throw new NotFoundException(`student with id = ${id} was not found`);
      });
    return deleteStudent;
  }
}
