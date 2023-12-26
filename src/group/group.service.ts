import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateGroupDto) {
    const group = await this.prisma.group.create({
      data: dto,
    });
    return group;
  }

  findAll() {
    return this.prisma.group.findMany();
  }

  async findOne(id: number) {
    const group = await this.prisma.group.findUnique({
      where: {
        id: id,
      },
    });
    if (!group) {
      throw new NotFoundException(`group with id = ${id} was not found`);
    }
    return group;
  }

  async update(id: number, dto: UpdateGroupDto) {
    const group = await this.prisma.group.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return group;
  }

  async remove(id: number) {
    const group = await this.prisma.group
      .delete({
        where: {
          id: id,
        },
      })
      .catch(() => {
        throw new NotFoundException(`group with id = ${id} was not found`);
      });
    return group;
  }
}
