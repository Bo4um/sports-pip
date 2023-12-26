import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateScheduleDto) {
    const schedule = await this.prisma.schedule.create({
      data: dto,
    });
    return schedule;
  }

  findAll() {
    return this.prisma.schedule.findMany();
  }

  async findOne(id: number) {
    const schedule = await this.prisma.schedule.findUnique({
      where: {
        id: id,
      },
    });
    if (!schedule) {
      throw new NotFoundException(`schedule with id = ${id} was not found`);
    }
    return schedule;
  }

  async update(id: number, dto: UpdateScheduleDto) {
    const schedule = await this.prisma.schedule.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return schedule;
  }

  async remove(id: number) {
    const schedule = await this.prisma.schedule
      .delete({
        where: {
          id: id,
        },
      })
      .catch(() => {
        throw new NotFoundException(`schedule with id = ${id} was not found`);
      });
    return schedule;
  }
}
