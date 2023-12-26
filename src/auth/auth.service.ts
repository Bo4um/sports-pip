import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          username: dto.username,
          hash,
          roles: {
            connect: { id: 3 },
          },
        },
        include: {
          roles: true,
        },
      });
      const payload = {
        sub: user.id,
        username: user.username,
        roles: user.roles,
      };

      const accessToken = await this.jwt.signAsync(payload);
      return { accessToken };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if ((error.code = 'P2002')) {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: dto.username,
      },
      include: {
        roles: true,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const passwordMatches = argon.verify(user.hash, dto.password);
    if (!(await passwordMatches).valueOf()) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles,
    };

    const accessToken = await this.jwt.signAsync(payload);
    return { accessToken };
  }
}
