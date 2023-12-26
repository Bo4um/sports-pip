import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SportService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateSportDto) {
    const sport = await this.prisma.sport.create({
      data: dto,
    });
    return sport;
  }

  findAll() {
    return this.prisma.sport.findMany();
  }

  async findOne(id: number) {
    const sport = await this.prisma.sport.findUnique({
      where: {
        id: id,
      },
    });
    if (!sport) {
      throw new NotFoundException(`sport with id = ${id} was not found`);
    }
    return sport;
  }

  async update(id: number, dto: UpdateSportDto) {
    const sport = await this.prisma.sport.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return sport;
  }

  async remove(id: number) {
    const sport = await this.prisma.sport
      .delete({
        where: {
          id: id,
        },
      })
      .catch(() => {
        throw new NotFoundException(`sport with id = ${id} was not found`);
      });
    return sport;
  }
}
