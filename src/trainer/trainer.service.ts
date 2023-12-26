import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TrainerService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTrainerDto) {
    const trainer = await this.prisma.trainer.create({
      data: dto,
    });
    return trainer;
  }

  findAll() {
    return this.prisma.trainer.findMany();
  }

  async findOne(id: number) {
    const trainer = await this.prisma.trainer.findUnique({
      where: {
        id: id,
      },
    });
    if (!trainer) {
      throw new NotFoundException(`trainer with id = ${id} was not found`);
    }
    return trainer;
  }

  async update(id: number, dto: UpdateTrainerDto) {
    const trainer = await this.prisma.trainer.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return trainer;
  }

  async remove(id: number) {
    const trainer = await this.prisma.trainer
      .delete({
        where: {
          id: id,
        },
      })
      .catch(() => {
        throw new NotFoundException(`trainer with id = ${id} was not found`);
      });
    return trainer;
  }
}
